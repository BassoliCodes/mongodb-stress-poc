import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

class UserController {
    public store = async (request: Request, response: Response) => {
        const { name, email } = request.body;

        if (!name || !email) {
            return response.status(400).json({
                status: 400,
                message: "You not provided a name and email.",
            });
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: { email },
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                status: 400,
                message: "Email provided is already in use.",
            });
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
            },
        });

        return response.json(user);
    };
}

export default new UserController();
