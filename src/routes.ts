import { Router } from "express";

import { CreateProductController } from "./controllers/products/CreateProductController";
import { FindProductController } from "./controllers/products/FindProductController";
import { DeleteProdutcController } from "./controllers/products/DeleteProdutcController";
import { UpdateProdutcController } from "./controllers/products/UpdateProductController";
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/autenticateUser/AutenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createProduct = new CreateProductController();
const findProduct = new FindProductController();
const deleteProduct = new DeleteProdutcController();
const updateProduct = new UpdateProdutcController();
const listAllProducts = new ListAllProductsController();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const refreshTokenUserController = new RefreshTokenUserController();

router.post("/products", createProduct.handle);
router.get("/product/:id", findProduct.handle);
router.delete("/product/:id", deleteProduct.handle);
router.put("/product/:id", updateProduct.handle);
router.get("/products", listAllProducts.handle);

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh_token", refreshTokenUserController.handle);

router.get("/login", ensureAuthenticated, (req, res) => {
    // res.sendFile(__dirname + '/views/login.html')
    res.json([
        { id: 1, name: "Erick" },
        { id: 2, name: "Gabriel" }
    ]);
});

export { router };