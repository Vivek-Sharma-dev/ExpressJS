import express from "express";
import path from "path";
import { dataVarification } from "../utils/dataVarification.js";

const hostRouter = express.Router();
const registeredHomes = [];
// host UI routes
hostRouter.get("/add-home", (req, res) => {
  res.render("addHome", { title: "Add Home - Airbnb", currentPage: "add home" });
});

// host response routes
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);
  const { isValid, error } = dataVarification(req.body);
  if (!isValid) {
    return res.status(400).render("errorPage", {
      title: "Error - Airbnb",
      error: error,
      currentPage: "error",
    });
  }
  registeredHomes.push({
    homeName: req.body.homeName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    image: req.body.image,
  });
  res.render("homeAdded", { title: "Home Added Successfully", currentPage: "home added" });
});

export { hostRouter, registeredHomes };
