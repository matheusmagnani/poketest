import { hash } from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";

interface CreateUserRequest {
  email: string;    
  password: string;
}

export class RegisterUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({email,password}: CreateUserRequest) {
    const existingUser = await this.userRepository.findByEmail(email)
    
    if(existingUser) {
      throw new Error('Usuário já cadastrado.')
    }

    const hashedPassword = await hash(password, 10)

    const user = await this.userRepository.create({
      email,
      password_hash: hashedPassword
    })

    return {
      id: user.id,
      email: user.email,
    }
  }
}