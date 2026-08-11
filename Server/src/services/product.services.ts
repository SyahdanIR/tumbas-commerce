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