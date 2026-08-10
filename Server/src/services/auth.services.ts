import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { AppError } from "../errors/app.error";
import { userInfo } from "node:os";

export const registerUser = async (
  email: string,
  name: string,
  password: string,
) => {
  const existedEmail = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existedEmail) {
    throw new AppError("E-mail is already registered.", 409);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const existedEmail = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!existedEmail) {
    throw new AppError("Email atau Password salah!", 401);
  }

  const isValid = await bcrypt.compare(password, existedEmail.password);

  if (!isValid) {
    throw new AppError("Email atau Password salah!", 401);
  }

  return existedEmail;
};
