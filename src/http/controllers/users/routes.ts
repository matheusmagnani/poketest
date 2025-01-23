import { Application } from "express";

export async function userRoutes(app: Application) {
  app.get('/users', (req, res) => {
    res.send('Ola caçador de pokemon')
  })
}