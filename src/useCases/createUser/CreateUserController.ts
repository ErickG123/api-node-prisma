import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body

        const createUserUseCase = new CreateUserUseCase()

        const user = await createUserUseCase.execute({
            name,
            email,
            password
        })

        return response.json(user)
    }
}

export { CreateUserController }