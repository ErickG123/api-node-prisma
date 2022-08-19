
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteProdutcController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, value } = request.body;

        const product = await prismaClient.product.delete({
            where: {
                id
            }
        })

        return response.json("Product successfully delete");
    }
}