import { UserRepository } from '../repositories/user-repository';
import { generateToken } from '../utils/generate-token';

interface LoginRequest {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: LoginRequest){
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas.'); // Não expor detalhes
    }

    const isPasswordValid = await this.userRepository.validatePassword(password, user.password_hash);
    if (!isPasswordValid) {
      throw new Error('Credenciais inválidas.');
    }

    
    const token = generateToken({ id: user.id, email: user.email });
    return token;
  }
}
