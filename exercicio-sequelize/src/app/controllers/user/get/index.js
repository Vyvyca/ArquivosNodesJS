import { UserModel } from "../../../models/user.model.js";
import {UserService} from "../../../services/user.service.js";
import { GetController } from "./get.controller.js";
const userService = new UserService(UserModel);
const getController = new GetController(userService);

export {getController};


