import { Application } from "express";

export async function pokemonRoutes(app: Application) {
  app.get('/pokemon', (req, res) => {
    res.send('Deve ter pokemons aqui!')
  })
}