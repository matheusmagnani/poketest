import { Request, Response } from "express";
import { LoginUseCase } from "../../../use-caes/login";
import { UserRepository } from "../../../repositories/user-repository";

export async function Login(req: Request, res: Response){  
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({ error: 'Preencha os campos email e senha.' });
      return;
    }

    const userRepository = new UserRepository()
    const loginUseCase = new LoginUseCase(userRepository)

    const token = await loginUseCase.execute({ email, password });
    res.status(200).json({ token: token});
  } catch (error) {
    return res.status(401).json({error: 'Credenciais inválidas.'})

  }
}
