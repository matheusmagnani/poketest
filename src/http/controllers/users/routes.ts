import { Router } from "express";
import { Login } from './login'
import { Register } from "./register";

const usersRoutes = Router();

usersRoutes.post('/register', Register)
usersRoutes.post('/login', Login)



export default usersRoutes;