import { hash } from "bcryptjs";
import { UserRepository } from "../repositories/user-repository";

interface RegisterUseCaseRequest {
  email: string;    
  password: string;
}

export class RegisterUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({email,password}: RegisterUseCaseRequest) {
    const useralreadyexists = await this.userRepository.findByEmail(email)
    
    if(useralreadyexists) {
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