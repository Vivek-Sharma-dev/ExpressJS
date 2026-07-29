import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getHome } from "../controllers/user.js";

const userRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

userRouter.get("/", getHome);

export default userRouter;
