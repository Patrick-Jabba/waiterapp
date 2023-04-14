import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function changeCategoryName(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    await Category.findByIdAndUpdate(categoryId, {name});

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
