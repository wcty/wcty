import { Request, Response } from 'express'
import { asyncWrapper } from '@shared/helpers'
import { createHash } from "@shared/push"

async function webSubscription(req: Request, res: Response) {
  console.log(req.body)

  const subscriptionRequest = req.body;
  const susbscriptionId = createHash(JSON.stringify(subscriptionRequest));
  console.log(JSON.stringify({
    susbscriptionId,
    subscriptionRequest
  }))
  res.status(201).json({ id: susbscriptionId });
}

export default asyncWrapper(webSubscription)
