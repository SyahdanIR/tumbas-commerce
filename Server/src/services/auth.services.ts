import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { AppError } from "../errors/app.error";
import { sign } from "hono/jwt";

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

  const token = await sign(
    {
      sub: existedEmail.id,
      emai: existedEmail.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, //nnti pakein access dan refresh token, buat sekarang gini dlu
    },
    process.env.JWT_SECRET!,
  );

  return {
    token,
    user: {
      id: existedEmail.id,
      name: existedEmail.name,
      email: existedEmail.email,
    },
  };
};
