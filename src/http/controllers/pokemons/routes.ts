import { Router } from "express";
import { PokemonRegister } from "./pokemon-register";
import { SearchPokemon } from "./search-pokemon";

const pokemonRoutes = Router()

pokemonRoutes.post('', PokemonRegister)
pokemonRoutes.get('/list', SearchPokemon)

export default pokemonRoutes