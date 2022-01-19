import { asyncWrapper } from '@shared/helpers'
import { request } from '@shared/request';
import { Request, Response } from 'express'

async function deleteSubscription(req: Request, res: Response) {
  const deviceToken = req.params.deviceToken;
  const websitePushID = req.params.websitePushID;

  request.deleteSubscription({id: deviceToken})

  return;
}

export default asyncWrapper(deleteSubscription)
