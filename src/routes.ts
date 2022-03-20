import { Router } from "express";

import { CreateProductController } from "./controllers/CreateProductController";
import { FindProductController } from "./controllers/FindProductController";
import { DeleteProdutcController } from "./controllers/DeleteProdutcController";
import { UpdateProdutcController } from "./controllers/UpdateProductController";

const router = Router();

const createProduct = new CreateProductController();
const findProduct = new FindProductController();
const deleteProduct = new DeleteProdutcController();
const updateProduct = new UpdateProdutcController();

router.post("/products", createProduct.handle);
router.get("/product/:id", findProduct.handle);
router.delete("/product/:id", deleteProduct.handle);
router.put("/product/:id", updateProduct.handle);

export { router };