import express from "express";
import * as hostController from "../controllers/host.js";

const hostRouter = express.Router();
const registeredHomes = [];
// host UI routes
hostRouter.get("/add-home", hostController.addHomeForm);

// host response routes
hostRouter.post("/add-home", hostController.addHome);

export { hostRouter, registeredHomes };
