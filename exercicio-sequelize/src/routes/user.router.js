import {Router} from "express";
import { userController } from "./../app/controllers/user/create/index.js";
import { deleteController} from "./../app/controllers/user/delete/index.js";
import { getController} from "./../app/controllers/user/get/index.js";
const router = Router();
router.get('/users',getController.execute.bind(getController) );
router.post('/user',userController.execute.bind(userController) );
router.delete("/user", deleteController.execute.bind(deleteController));
export default router;
