import { UserModel } from "../../../models/user.model.js";
import {UserService} from "../../../services/user.service.js";
import { CreateController } from "./create.controller.js";
const userService = new UserService(UserModel);
const userController = new CreateController(userService);

export {userController};


