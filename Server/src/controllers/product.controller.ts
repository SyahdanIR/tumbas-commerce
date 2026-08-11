import { Context } from "hono";
import {
  createProduct,
  deleteProduct,
  editProduct,
  showAllProduct,
} from "../services/product.services";

export const createProductController = async (c: Context) => {
  const body = await c.req.json();

  const product = await createProduct(
    body.name,
    body.description,
    body.price,
    body.stock,
    body.categoryId,
    body.imageUrl,
  );

  return c.json(
    {
      message: "Product berhasil ditambahkan!",
      product,
    },
    201,
  );
};

export const showAllProductController = async (c: Context) => {
  const products = await showAllProduct();
  return c.json({
    message: "Displaying all products:",
    products,
  });
};

export const editProductController = async (c: Context) => {
  const id = c.req.param("id") as string;
  const body = await c.req.json();

  const product = await editProduct(
    id,
    body.name,
    body.description,
    body.price,
    body.stock,
    body.categoryId,
    body.imageUrl,
  );

  return c.json({
    message: "Product edited successfully!",
    product,
  });
};

export const deleteProductController = async (c: Context) => {
  const body = await c.req.json();
  const product = await deleteProduct(body.id);

  return c.json({
    message: "Success deleting product!",
    product,
  });
};
