import { Context } from "hono";
import { createCategory } from "../services/category.services";

export const createCategoryController = async (c: Context) => {
  const body = await c.req.json();

  const category = await createCategory(body.name);

  return c.json(
    {
      message: "Berhasil menambahkan category!",
      category,
    },
    201,
  );
};

