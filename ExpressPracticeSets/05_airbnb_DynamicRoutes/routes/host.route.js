import express from "express";
import * as hostController from "../controllers/host.controller.js";

const hostRouter = express.Router();
// host UI routes
hostRouter.get("/add-home", hostController.addHomeForm);

// host response routes
hostRouter.post("/add-home", hostController.addHome);

export default hostRouter;
