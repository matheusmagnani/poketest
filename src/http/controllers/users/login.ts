import { Request, Response } from "express";

// Função que retorna uma resposta JSON
export function Login(req: Request, res: Response): Response {  
  return res.status(200).json({
    hello: 'Logando Usuário'
  });
}