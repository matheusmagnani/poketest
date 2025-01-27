import { prisma } from "../lib/prisma";

interface PokemonData {
  id: number,
  name: string,
  userId: string | undefined,
  height: number,
  weight: number,
  abilities: string[],
  image: string,
  createdAt: Date,
  updatedAt: Date

}

export class PokemonRepository {
  public async create(pokemonData: PokemonData) {
    return prisma.pokemon.create({
      data: {
      id: pokemonData.id,
      name: pokemonData.name,
      userId: pokemonData.userId,
      height: pokemonData.height,
      weight: pokemonData.weight,
      abilities: pokemonData.abilities,
      image: pokemonData.image,
      }
    })
  
  }

  async findByNameAndUserId(name: string, userId: string | undefined) {
      return prisma.pokemon.findFirst({
        where: {
          name,
          userId,
        },
      });
  }

  public async findByUserId(userId: string) {
    return prisma.pokemon.findMany({
      where: { userId }
    })
  }


}