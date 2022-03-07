import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prismaCLient = new PrismaClient();

class UserController {
    public store = async (request: Request, response: Response) => {
        const { name, email } = request.body;

        if (!name || !email) {
            return response.status(400).json({
                status: 400,
                message: "Você precisa informar todos os campos.",
            });
        }

        const user = await prismaCLient.user.create({
            data: {
                name,
                email,
            },
        });

        return response.json(user);
    };
}

export default new UserController();
