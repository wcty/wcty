import { Request, Response } from 'express'
import { asyncWrapper } from '@shared/helpers'
import DeletedFileDummy from './dummy'
import { storage } from '@shared/nhost'


async function deleteFile(req: Request, res: Response): Promise<unknown> {
  const body = (req.body.event?req.body:DeletedFileDummy) as typeof DeletedFileDummy


  try {
    const path = body.event.data.old.file_path
    const result = await storage.delete(path)
    console.log(result)

    return res.status(200).send('OK')
  } catch (err) {

    console.error(err)
    return res.boom.badImplementation()
  }  

}

export default asyncWrapper(deleteFile)
