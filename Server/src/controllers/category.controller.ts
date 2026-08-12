import { Context } from "hono";
import {
  createCategory,
  deleteCategory,
  editCategory,
  showAllCategory,
} from "../services/category.services";

export const createCategoryController = async (c: Context) => {
  const body = await c.req.json();

  const category = await createCategory(body.name);

  return c.json(
    {
      message: "Success create category!",
      category,
    },
    201,
  );
};

export const editCategoryController = async (c: Context) => {
  const id = c.req.param("id") as string;
  const body = await c.req.json();
  const category = await editCategory(id, body.name);

  return c.json(
    {
      message: "Success edit category!",
      category,
    },
    200,
  );
};

export const showAllCategoryController = async (c: Context) => {
  const category = await showAllCategory();

  return c.json({
    message: "Showing all Category",
    category,
  });
};

export const deleteCategoryController = async (c: Context) => {
  const id = c.req.param("id") as string;
  const category = await deleteCategory(id);

  return c.json({
    message: "delete category success!",
    category,
  });
};
