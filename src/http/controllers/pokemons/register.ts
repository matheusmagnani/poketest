import { Request, Response } from "express";
import { PokemonRepository } from "../../../repositories/pokemon-repository";
import { RegisterPokemonUseCase } from "../../../use-case/pokemon-create";

export async function PokemonRegister(req: Request, res: Response) {  
  const { name } = req.body

  const userId = req.user?.id

  
  if(!name){
    return res.status(400).json({error: "name is required"})
  }
  
  const pokemonRepository = new PokemonRepository()
  const createPokemonUseCase = new RegisterPokemonUseCase(pokemonRepository)
  
  try {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    
    const pokemon = await createPokemonUseCase.execute({ pokeApi, userId, name});
    
    return res.status(201).json(pokemon)
  } catch (error: any) {
    if (error.name === "DuplicateError") {
      return res.status(401).json({ error: error.message });
    }

    if (error.name === "NotFoundError") {
      return res.status(404).json({ error: error.message });
    }

    // Para outros erros não tratados explicitamente
    return res.status(500).json({ error: "Internal Server Error" });
  }
}