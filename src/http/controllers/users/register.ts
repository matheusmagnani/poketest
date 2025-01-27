import { Request, Response } from "express";
import { UserRepository } from "../../../repositories/user-repository";
import { RegisterUseCase } from "../../../use-case/user-register";

export async function Register(req: Request, res: Response) {  
  const { email, password } = req.body

  if(!email || !password){
    return res.status(400).json({error: "E-mail ou senha inválidos."})
  }

  const usersRepository = new UserRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  try {
    await registerUseCase.execute({ email, password})
    return res.status(201).json({message: 'Usuário Cadastrado com sucesso'})
  } catch (error: any) {
    return res.status(400).json({error: error.message})
  }

}