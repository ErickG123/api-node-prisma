import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, "78bbf843-5cf9-407c-8983-cafeba6d56ef")

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}