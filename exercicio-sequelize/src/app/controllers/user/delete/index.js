import { UserModel } from "../../../models/user.model.js";
import {UserService} from "../../../services/user.service.js";
import { DeleteController } from "./delete.controller.js";
const userService = new UserService(UserModel);
const deleteController = new DeleteController(userService);

export {deleteController};


