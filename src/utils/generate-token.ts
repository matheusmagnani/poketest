import jwt from 'jsonwebtoken';
import { env } from "process";

export const generateToken = (payload: object) : string =>{
   return jwt.sign(payload, env.JWT_SECRET_KEY ?? "")
}