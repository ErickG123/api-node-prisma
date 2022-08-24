import dayjs from "dayjs";

import { prismaClient } from "../database/prismaClient";

class GenerateRefreshToken {
    async execute(userId: string) {
        const expiresIn = dayjs().add(15, "second").unix();

        const generateRefreshToken = await prismaClient.refreshToken.create({
            data: {
                expiresIn,
                userId
            }
        })

        return generateRefreshToken;
    }
}

export { GenerateRefreshToken };