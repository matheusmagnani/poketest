import { PokemonRepository } from "../repositories/pokemon-repository";

interface SearchPokemonUseCaseRequest{
  userId: string | undefined; 
  page: number;
  limit: number;
  name?: string
}

interface SearchPokemonUseCaseResponse {
  data: {
    id: string;
    name: string;
    userId: string | null;
    height: number;
    weight: number;
    abilities: string[];
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  total: number;
  currentPage: number;
  totalPages: number;
}


export class SearchPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}
    async execute({ userId, page, limit, name}: SearchPokemonUseCaseRequest): Promise<SearchPokemonUseCaseResponse> {

    const pokemons = await this.pokemonRepository.list(name || "", userId, limit, page);

    if(pokemons.total === 0){
      throw new Error("Este usuário ainda não cadastrou este Pokemon")
    }

    return pokemons;
    
    }
}

    

