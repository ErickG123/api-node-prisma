import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, value } = request.body;

        const product = await prismaClient.product.create({
            data: {
                name,
                value
            }
        })

        return response.json(product);
    }
}