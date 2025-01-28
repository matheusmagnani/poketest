import { Router } from "express";
import { PokemonRegister } from "./register";
import { SearchPokemon } from "./search";
import { verifyJWT } from "../../middlewares/verify-jwt";

const pokemonRoutes = Router()

pokemonRoutes.get('', verifyJWT, SearchPokemon)

pokemonRoutes.post('', verifyJWT, PokemonRegister)

export default pokemonRoutes