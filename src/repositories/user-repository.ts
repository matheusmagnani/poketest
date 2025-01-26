import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";


interface UserData {
  email: string;
  password_hash: string;
}

export class UserRepository {
  public async create(userData: UserData) {
    return prisma.user.create({
      data: userData
    })
  }

  public async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  }

  public async validatePassword(password: string, password_hash: string): Promise<boolean> {
    return bcrypt.compare(password, password_hash);
  }
}