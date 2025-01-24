import { Request, Response } from "express";
 

export function PokemonRegister(req: Request, res: Response) {  
  return res.status(200).json({
    hello: 'Registrando Pokemon'
  });
}