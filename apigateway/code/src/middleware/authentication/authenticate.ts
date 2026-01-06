import { Request, Response, NextFunction } from 'express';

// Bearer token OR cookie authentication middleware
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  //Try cookie first
  const cookieToken: string | undefined = req.cookies?.auth_token;

  //Fallback to Authorization header
  const authHeader: string | undefined = req.headers.authorization;
  const headerToken: string | undefined =
    authHeader && authHeader.split(' ')[1];

  //Use whichever exists
  const token: string | undefined = cookieToken || headerToken;

  const expectedToken: string = 'your-secret-token'; // tutorial placeholder

  if (token === expectedToken) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
