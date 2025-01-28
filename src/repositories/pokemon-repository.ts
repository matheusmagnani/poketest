import { prisma } from "../lib/prisma";

interface PokemonData {
  name: string,
  userId: string | undefined,
  height: number,
  weight: number,
  abilities: string[],
  image: string,
  page: number,
  limit: number,
  createdAt: Date,
  updatedAt: Date

}

export class PokemonRepository {
  public async create(pokemonData: PokemonData) {
    return prisma.pokemon.create({
      data: {
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

  public async list(name: string, userId: string | undefined, limit: number, page: number) {
      const offset = (page - 1) * limit;

      const pokemons = await prisma.pokemon.findMany({
        where: {
          userId,
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        skip: offset,
        take: limit,
      });

      const total = await prisma.pokemon.count({
          where: {
            userId,
            name: {
                contains: name,
                mode: "insensitive",
              },
            },
        });


      return {
        data: pokemons,
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      };
    
  }
}