import { Router } from "express";
import { body } from "express-validator";

import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = new Router();

router.post(
    "/registration",
    body("email").isEmail(),
    body("password")
        .isLength({ min: 5, max: 20 })
        .withMessage("min: 5, max: 20")
        .isString()
        .withMessage("must be a string"),
    userController.registration
);
router.post(
    "/login",
    body("email").isEmail(),
    body("password")
        .isLength({ min: 5, max: 20 })
        .withMessage("min: 5, max: 20")
        .isString()
        .withMessage("must be a string"),
    userController.login
);
router.post("/logout", userController.logout);
router.get("/users", authMiddleware, userController.getAllUsers);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refreshCookie);

export default router;
