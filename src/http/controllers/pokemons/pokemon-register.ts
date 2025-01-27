import { Request, Response } from "express";
import { PokemonRepository } from "../../../repositories/pokemon-repository";
import { CreatePokemonUseCase } from "../../../use-case/pokemon-create";

export async function PokemonRegister(req: Request, res: Response) {  
  const { name } = req.body

  const userId = req.user?.id

  
  if(!name){
    return res.status(400).json({error: "name is required"})
  }
  
  const pokemonRepository = new PokemonRepository()
  const createPokemonUseCase = new CreatePokemonUseCase(pokemonRepository)
  
  try {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    
    const pokemon = await createPokemonUseCase.execute({ pokeApi, userId, name});
    
    return res.status(201).json(pokemon)
  } catch (error: any) {
    return res.status(404).json({error: "pokemon não encontrado."})
  }

}