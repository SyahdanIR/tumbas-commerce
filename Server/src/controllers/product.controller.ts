import { Context } from "hono";
import { createProduct } from "../services/product.services";

export const createProductController = async(c: Context) => {
    const body = await c.req.json();
    
    const product = await createProduct(
        body.name,
        body.description,
        body.price,
        body.stock,
        body.categoryId,
        body.imageUrl
    );

    return c.json(
        {
            message: "Product berhasil ditambahkan!",
            product,
        },
        201
    );
};