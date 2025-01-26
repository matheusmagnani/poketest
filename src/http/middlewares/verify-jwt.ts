import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from 'process';

const SECRET_KEY = env.JWT_SECRET_KEY || '';

interface DecodedToken {
  id: string;
  email: string;
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction ) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;

    req.user = { id: decoded.id, email: decoded.email  };
    next()

  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};