import { COOKIES } from './config'
import { NextFunction, Response } from 'express'
import { PermissionVariables, RequestExtended } from './types'


/**
 * This wrapper function sends any route errors to `next()`.
 */

export function asyncWrapper(fn: any) {
  return function (req: RequestExtended, res: Response, next: NextFunction): void {
    fn(req, res, next).catch(next)
  }
}

export const getPermissionVariablesFromCookie = (req: RequestExtended): PermissionVariables => {
  const { permission_variables } = COOKIES.SECRET ? req.signedCookies : req.cookies
  if (!permission_variables) throw new Error('No permission variables')
  return JSON.parse(permission_variables)
}

export const getEndURLOperator = ({ url }: { url: string }) => {
  return url.includes('?') ? '&' : '?'
}