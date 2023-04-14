import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function changeProductIngredients(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { ingredients } = req.body;

    await Product.findByIdAndUpdate(productId, {ingredients});

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
