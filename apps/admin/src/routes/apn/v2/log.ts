import { asyncWrapper } from '@shared/helpers'
import { Request, Response } from 'express'

async function log(req: Request, res: Response) {
  const body = req.body
  console.log(req.headers, body);

  res.status(200);
  return;
}

export default asyncWrapper(log)
