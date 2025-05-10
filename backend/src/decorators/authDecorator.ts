import { Request, Response } from 'express';
import { BaseResponse } from '../model/response/BaseResponse';

/**
 * A decorator for the purpose of checking the authorization of the user.
 * If the user logged into the application and has an active session,
 * then the user can access the business logic of the endpoint, else throw an error.
 */
export function AuthenticateUser(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (req: Request, res: Response) {
    if (req.isAuthenticated()) {
      return originalMethod(req, res);
    } else {
      const baseResponse: BaseResponse = { error: 'Unauthorized!' };
      res.status(400).send(baseResponse);
    }
  };

  return descriptor;
}
