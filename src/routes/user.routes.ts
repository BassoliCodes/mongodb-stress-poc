import { Router } from "express";
import userController from "../controller/UserController";

const userRouter = Router();

userRouter.post("/", userController.store);

export default userRouter;
