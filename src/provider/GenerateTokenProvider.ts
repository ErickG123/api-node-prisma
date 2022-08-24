import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
    async execute(userId: string) {
        const token = sign({}, "78bbf843-5cf9-407c-8983-cafeba6d56ef", {
            subject: userId,
            expiresIn: "20s"
        });

        return token;
    }
}

export { GenerateTokenProvider };