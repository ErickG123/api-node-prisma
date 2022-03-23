import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class ListAllProductsController {
    async handle(request: Request, response: Response) {
        const products = await prismaClient.product.findMany();

        return response.json(products);
    }
}