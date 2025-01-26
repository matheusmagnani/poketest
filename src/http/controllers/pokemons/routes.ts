import { Router } from "express";
import { PokemonRegister } from "./pokemon-register";
import { SearchPokemon } from "./search-pokemon";
import { verifyJWT } from "../../middlewares/verify-jwt";

const pokemonRoutes = Router()

pokemonRoutes.get('/list', verifyJWT, SearchPokemon)

pokemonRoutes.post('', verifyJWT, PokemonRegister)

export default pokemonRoutes