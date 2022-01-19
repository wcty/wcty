
export const APPLICATION = {
  HASURA_ENDPOINT: process.env.HASURA_ENDPOINT || 'http://localhost:3000/v1/graphql',
  PORT: Number(process.env.PORT) || 3000,
  HOST: process.env.HOST || 'localhost',
  SMTP_HOST: process.env.SMTP_HOST || 'localhost',
  SMTP_PORT: Number(process.env.SMTP_PORT) || 25,
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  SMTP_SECURE: Boolean(process.env.SMTP_SECURE) || false,
  SMTP_SENDER: process.env.SMTP_SENDER || '',
  HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  RECEIVER_ADDRESS: process.env.RECEIVER_ADDRESS,
  REDIRECT_URL_SUCCESS: process.env.REDIRECT_URL_SUCCESS,
}

export const COOKIES = {
  SECRET: process.env.COOKIE_SECRET || 'secret',
  SAME_SITE: process.env.COOKIE_SAME_SITE || 'lax',
  SECURE: process.env.COOKIE_SECURE || false,
}

export const PUSH = {
  VAPID_PRIVATE: process.env.VAPID_PRIVATE!,
  VAPID_PUBLIC: process.env.VAPID_PUBLIC!,
  AUTH_KEY: process.env.AUTH_KEY!,
}