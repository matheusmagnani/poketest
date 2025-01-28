import { Request, Response } from "express";
import { PokemonRepository } from "../../../repositories/pokemon-repository";
import { SearchPokemonUseCase } from "../../../use-case/pokemonn-search";

export async function SearchPokemon(req: Request, res: Response){
  const { page = 1, limit = 10, name } = req.query;
  const userId = req.user?.id;
  
  const pokemonRepository = new PokemonRepository();
  const searchPokemonUseCase = new SearchPokemonUseCase(pokemonRepository);

  try {
    const list = await searchPokemonUseCase.execute({
      userId: String(userId),
      page: Number(page),
      limit: Number(limit),
      name: name ? String(name) : undefined,
    });


    return res.status(200).json(list);
  } catch (error: any) {
      return res.status(404).json({ error: error.message });
  }
}