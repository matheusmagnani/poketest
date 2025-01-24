import { Request, Response } from "express";
import { UsersRepository } from "../../../repositories/users-repository";
import { RegisterUserUseCase } from "../../../use-caes/register";

export async function Register(req: Request, res: Response) {  
  const { email, password } = req.body

  if(!email || !password){
    return res.status(400).json({message: 'Preencha os campos email e senha.'})
  }

  const usersRepository = new UsersRepository()
  const createUserUseCase = new RegisterUserUseCase(usersRepository)

  try {
    await createUserUseCase.execute({ email, password})
    return res.status(201).json({message: 'Usuário Cadastrado com sucesso'})
  } catch (error: any) {
    return res.status(400).json({message: error.message})
  }

}