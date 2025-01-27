import { Request, Response } from "express";

export function SearchPokemon(req: Request, res: Response){
  return res.status(200).json({
    hello: 'Listando Pokemons'
  })
}