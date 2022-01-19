import { asyncWrapper } from '@shared/helpers'
import { Request, Response } from 'express'

async function postSubscription(req: Request, res: Response) {
  const deviceToken = req.params.deviceToken;
  const websitePushID = req.params.websitePushID;
  const subscribeData = {
    deviceToken: deviceToken,
    websitePushID: websitePushID,
    platform: 'safari'
  };

  // Todo: add deviceToken into pushfarm database
  return;
}

export default asyncWrapper(postSubscription)
