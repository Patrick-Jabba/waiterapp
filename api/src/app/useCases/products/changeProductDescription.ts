import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function changeProductDescription(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { description } = req.body;

    await Product.findByIdAndUpdate(productId, {description});

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
