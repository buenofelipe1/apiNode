import { request, Router } from "express";
import { UserController } from "./controllers/Usercontroller";

const router = Router();

const userController = new UserController();

router.post ("/users", userController.create);

export {router};