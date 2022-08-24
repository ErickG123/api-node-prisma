import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction)=> {
    return response.json({
        status: "Error",
        message: error.message
    });
});

app.use(cors());

app.listen(3000, () => console.log("Server is running on PORT 3000"));