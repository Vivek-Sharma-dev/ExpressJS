import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const userRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views/index.html"));
});

export default userRouter;
