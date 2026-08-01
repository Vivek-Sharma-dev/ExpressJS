import { Home } from "../models/home.js";
import { dataVarification } from "../utils/dataVarification.js";

export const addHomeForm = (req, res) => {
  res.render("host/addHome", {
    title: "Add Home - Airbnb",
    currentPage: "add home",
  });
};

export const addHome = (req, res) => {
  const { isValid, error } = dataVarification(req.body);
  if (!isValid) {
    return res.status(400).render("comman/errorPage", {
      title: "Error - Airbnb",
      error: error,
      currentPage: "error",
    });
  }

  const { homeName, price, location, rating, image } = req.body;
  const home = new Home(homeName, price, location, rating, image);
  home.save();
  res.render("host/homeAdded", {
    title: "Home Added Successfully",
    currentPage: "home added",
  });
};
