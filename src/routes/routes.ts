import { Router } from "express";

import { CreateProductController } from "../controllers/products/CreateProductController";
import { FindProductController } from "../controllers/products/FindProductController";
import { DeleteProdutcController } from "../controllers/products/DeleteProdutcController";
import { UpdateProdutcController } from "../controllers/products/UpdateProductController";
import { ListAllProductsController } from "../controllers/products/ListAllProductsController";

const router = Router();

const createProduct = new CreateProductController();
const findProduct = new FindProductController();
const deleteProduct = new DeleteProdutcController();
const updateProduct = new UpdateProdutcController();
const listAllProducts = new ListAllProductsController();

router.post("/products", createProduct.handle);
router.get("/product/:id", findProduct.handle);
router.delete("/product/:id", deleteProduct.handle);
router.put("/product/:id", updateProduct.handle);
router.get("/products", listAllProducts.handle);

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

export { router };