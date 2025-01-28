import axios from "axios";
import { PokemonRepository } from "../repositories/pokemon-repository";

interface RegisterPokemonUseCaseRequest{
  name: string;
  pokeApi: string; 
  userId: string | undefined;
  page?: number;
  limit?: number;
}

export class RegisterPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute({pokeApi, userId, name}: RegisterPokemonUseCaseRequest) {    
    const duplicatePokemon = await this.pokemonRepository.findByNameAndUserId(name, userId);

    if (duplicatePokemon) {
      const error = new Error("Pokémon já cadastrado.");
      error.name = "DuplicateError"; 
      throw error;
    }

    try {
      const { data } = await axios.get(pokeApi);
      
      const pokemonData = {
        name: data.name,
        userId,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
        image: data.sprites.front_default,
        page: data.page,
        limit: data.limit,
        createdAt: new Date(), 
        updatedAt: new Date(),
      };

      // 3. Salvando no banco de dados
      const pokemon = await this.pokemonRepository.create(pokemonData);

      return pokemon;
    
    } catch (error) {
      const apiError = new Error("Pokémon não encontrado.");
      apiError.name = "NotFoundError"; // Identificação para tratamento posterior
      throw apiError;
    }
  }
}
