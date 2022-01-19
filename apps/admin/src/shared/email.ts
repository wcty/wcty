import { APPLICATION } from '@shared/config'

import Email from 'email-templates'
import nodemailer from 'nodemailer'
import path from 'path'
import { environment } from '../environments/environment';
import { VERSION } from 'ejs'

/**
 * SMTP transport.
 */
const transport = nodemailer.createTransport({
  host: APPLICATION.SMTP_HOST,
  port: Number(APPLICATION.SMTP_PORT),
  secure: Boolean(APPLICATION.SMTP_SECURE),
  auth: {
    pass: APPLICATION.SMTP_PASS,
    user: APPLICATION.SMTP_USER
  }
})

/**
 * Reusable email client.
 */
export const emailClient = new Email({
  transport,
  message: { from: APPLICATION.SMTP_SENDER },
  send: true,
  views: {
    root: path.resolve(
      process.env.PWD ? process.env.PWD + environment.mailRoot : '' || '.',
      'mail-templates'
    ),
    options: {
      extension: 'ejs'
    }
  }
})