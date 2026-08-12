import { AppError } from "../errors/app.error";
import prisma from "../lib/prisma";

export const createCategory = async (name: string) => {
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return category;
};

export const editCategory = async (id: string, name: string) => {
  const existedCategory = await prisma.category.findUnique({
    where: { id },
  });

  if (!existedCategory) {
    throw new AppError("Category tidak ditemukan!", 404);
  }

  const category = await prisma.category.update({
    where: { id },
    data: {
      name: name,
    },
  });

  return category;
};

export const showAllCategory = async () => {
  const category = await prisma.category.findMany();

  if (!category) {
    throw new AppError("Category is empty!", 404);
  }

  return category;
};

export const deleteCategory = async (id: string) => {
  const category = await prisma.category.delete({
    where: { id: id },
  });

  if (!category) {
    throw new AppError("Category not found!", 404);
  }

  return category;
};
