import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registeredHomes } from "./host.route.js";

const userRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

userRouter.get("/", (req, res) => {
  console.log(registeredHomes)
  res.render("index", { registeredHomes, title: "Home - Airbnb", currentPage: "home" });
});

export default userRouter;
