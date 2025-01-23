import express from 'express'
import { userRoutes } from './http/controllers/users/routes';
import { pokemonRoutes } from './http/controllers/pokemons/routes';


export const app = express()

app.use(express.json())

userRoutes(app);
pokemonRoutes(app);