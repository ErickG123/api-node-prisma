
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateProdutcController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, value } = request.body;

        const product = await prismaClient.product.update({
            where: {
                id
            },
            data: {
                name,
                value,
            }
        })

        return response.json(product);
    }
}