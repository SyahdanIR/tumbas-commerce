import { AppError } from "../errors/app.error";
import prisma from "../lib/prisma";

export const createProduct = async (
  name: string,
  description: string,
  price: number,
  stock: number,
  categoryId: string,
  imageUrl?: string,
) => {
  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      categoryId,
      ...(imageUrl && { imageUrl }),
    },
  });
  return product;
};

export const showAllProduct = async () => {
  const products = await prisma.product.findMany();

  return products;
};

export const editProduct = async (
  id: string,
  name: string,
  description: string,
  price: number,
  stock: number,
  categoryId: string,
  imageUrl?: string,
) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) {
    throw new AppError("Product not found!", 404);
  }

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      price,
      stock,
      categoryId,
      ...(imageUrl != undefined && { imageUrl }),
    },
  });

  return updatedProduct;
};

export const deleteProduct = async (id: string) => {
  const product = await prisma.product.delete({
    where: {
      id: id,
    },
  });

  if (!product) {
    throw new AppError("Product not found!", 404);
  }

  return product;
};
