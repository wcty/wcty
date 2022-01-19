import { Request, Response } from 'express'
import { asyncWrapper } from '@shared/helpers'
import { emailClient } from '@shared/email'
import type { NewPost } from './types'
import { request } from '@shared/request'
import { NewPostDummy } from './dummies'
import webpush from "web-push"
import apn from 'apn'
import { apnProvider } from '.'


async function newPost(req: Request, res: Response): Promise<unknown> {
  const body = (req.body.event?req.body:NewPostDummy) as NewPost
  const user = await request.user({ id: body.event.data.new.user_id })
  const subscribed = await request.subscribedMembers({initiative_id: body.event.data.new.initiative_id})
  const email_recipients = subscribed.initiative_members
    .filter(m=>m.email_notifications_permission)

  const push_recipients = subscribed.initiative_members
    .filter(m=>m.push_notifications_permission)

  try {
    for (const email_recipient of email_recipients) {
      const email = {
        template: 'new-post',
        message: {
          to: email_recipient.user?.account?.email,
        },
        locals: {
          initiativeName: email_recipient.initiative.name,
          initiativeURL: 'https://weee.city/initiative/'+email_recipient.initiative_id,
          postMessage: body.event.data.new.message,
          userName: user.user?.display_name,
          userProfileURL: 'https://weee.city/users/'+user.user?.id,
          userAvatarUrl: user.user?.avatar_url,
          replyURL: 'https://weee.city/initiative/' + body.event.data.new.initiative_id + "/post/" + body.event.data.new.id,
          notificationConfigURL: 'https://weee.city/users/' + email_recipient.user?.id + "/settings/notifications"
        }
      }
      await emailClient.send(email)
    }

    for (const push_recipient of push_recipients) {
      for(const subscription of push_recipient.user?.subscriptions ?? []) {
        console.log(subscription)
        if(subscription.service==='apn'){
          var note = new apn.Notification();
          note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
          note.badge = 3;
          note.sound = "ping.aiff";
          note.alert = ((body.event.data.new.message+"") || "New post in your initiative");
          note.payload = {'messageFrom': user.user?.display_name};
          note.topic = "web.city.weee.admin";
          note.urlArgs = ['initiative/' + body.event.data.new.initiative_id + "/post/" + body.event.data.new.id+ ""];
          note.alert = {
            "title": (user.user?.display_name ||'Weee City'),
            "subtitle": push_recipient.initiative.name||'',
            "body": ((body.event.data.new.message) || "New post in your initiative")+'',
            "action-loc-key": "Read the post",
          };

          const result = await apnProvider.send(note, subscription.id)
          console.log(JSON.stringify(result))
        }else{
          try{
            await webpush
              .sendNotification(
                JSON.parse(subscription.subscription),
                JSON.stringify({
                  title: (user.user?.display_name ||'Weee City'),
                  subtitle: push_recipient.initiative.name||'',
                  text: (body.event.data.new.message) || "New post in your initiative",
                  image: user.user?.avatar_url,
                  tag: "new-post",
                  url: "https://www.weee.city/initiative/" + body.event.data.new.initiative_id + "/post/" + body.event.data.new.id+ ""
                })
              )
          }catch(err: any){
            console.log(err)
            if(err?.statusCode === 410){
              const deleted = await request.deleteWebSubscription({
                subscription_id: subscription.id
              })
              console.log('Deleted web subscription ', deleted)
            }
          }
        }
      }
    }

    return res.status(200).send('OK')
  } catch (err) {

    console.error(err)
    return res.boom.badImplementation()
  }  

}

export default asyncWrapper(newPost)
