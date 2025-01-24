import { prisma } from "../lib/prisma";

interface RegisterUserData {
  email: string;
  password_hash: string;
}

export class UsersRepository {
  async create(userData: RegisterUserData) {
    return prisma.user.create({
      data: userData
    })
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  }
}