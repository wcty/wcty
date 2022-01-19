import { asyncWrapper } from '@shared/helpers'
import { Request, Response } from 'express'
import fs from 'fs';
import { environment } from '../../../environments/environment'
const pushPackage = "pushPackage.zip";

async function pushPackages(req: Request, res: Response) {
  const websitePushID = req.params.websitePushID;
  const path = environment.assetsRoot + "/packages/v1/" + pushPackage;
  console.log(path)
  if (fs.existsSync(path) == false) {
    console.log("File not found");
    res.writeHead(404);
    res.end();
    return;
  }

  fs.readFile(path, function (error, data) {
    res.writeHead(200, {'Content-Type': 'application/zip'});
    res.end(data);
  });
  
  return;
}

export default asyncWrapper(pushPackages)
