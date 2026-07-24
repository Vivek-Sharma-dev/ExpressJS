import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const hostRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// host UI routes
hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/addHome.html"));
});

// host response routes
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../views/homeAdded.html"));
});

export default hostRouter;
