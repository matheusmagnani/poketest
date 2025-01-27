import axios from "axios";
import { PokemonRepository } from "../repositories/pokemon-repository";

interface CreatePokemonUseCaseRequest{
  name: string;
  pokeApi: string; 
  userId: string | undefined; 
}

export class CreatePokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute({pokeApi, userId, name}: CreatePokemonUseCaseRequest) {

    const duplicatePokemon = await this.pokemonRepository.findByNameAndUserId(name, userId);
    if (duplicatePokemon) {
      throw new Error('Pokemon já cadastrado.'); 
    }

    const { data } = await axios.get(pokeApi);

    const pokemonData = {
      id: data.id,
      name: data.name,
      userId,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
      image: data.sprites.front_default,
      createdAt: new Date(), 
      updatedAt: new Date(),
    };

    // 3. Salvando no banco de dados
    const pokemon = await this.pokemonRepository.create(pokemonData);

    return pokemon;
  }
}