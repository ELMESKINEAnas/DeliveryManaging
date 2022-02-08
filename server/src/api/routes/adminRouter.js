import express from "express";
const router = express.Router();


import {
    loginAdmin,
    logout,
    createManager,
    getAllManagers,
    updateManager,
    getManager,
    removeManager,
    signup
} from "../controllers"

import {
    CreatUserValidator,
    Auth
} from "../middlewares"

router.post("/login", loginAdmin)
router.post("/create",signup)
router.get("/logout", logout)
router.post("/createManager", CreatUserValidator, createManager)
router.get("/getAllManagers",  getAllManagers)
router.get("/getManager/:id", Auth("ADMIN"), getManager)
router.patch("/updateManager/:id", updateManager)
router.delete("/RemoveManager/:id", removeManager)

export { router }