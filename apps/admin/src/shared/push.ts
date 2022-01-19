import crypto from "crypto"
import webpush from "web-push"
import { Request, Response } from 'express'
import { PUSH } from "@shared/config"

const vapidKeys = {
  privateKey: PUSH.VAPID_PRIVATE,
  publicKey: PUSH.VAPID_PUBLIC
};

webpush.setVapidDetails("mailto:hi@weee.city", vapidKeys.publicKey, vapidKeys.privateKey);
console.log('Set vapid keys')

export function createHash(input:string) {
  const md5sum = crypto.createHash("md5");
  md5sum.update(Buffer.from(input));
  return md5sum.digest("hex");
}