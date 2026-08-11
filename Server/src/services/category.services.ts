import prisma from "../lib/prisma";

export const createCategory = async(
    name: string,
) => {
    const category = await prisma.category.create({
        data: {
            name,
        }
    })
    return category;
}