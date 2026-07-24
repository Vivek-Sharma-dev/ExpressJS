import express from "express";
import path from "path";


const hostRouter = express.Router();
const homeDetails = [];
// host UI routes
hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "addHome.html"));
});

// host response routes
hostRouter.post("/add-home", (req, res) => {

  console.log(req.body.homeName);
  res.sendFile(path.join(process.cwd(), "views", "homeAdded.html"));
});

export default hostRouter;
