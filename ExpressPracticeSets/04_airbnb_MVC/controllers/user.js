import { Home } from "../models/home.js";
import { registeredHomes } from "../routes/host.route.js";

export const getHome = (req, res) => {
  Home.getAllHomes( registeredHomes => {
    res.render("store/index", {
    registeredHomes,
    title: "Home - Airbnb",
    currentPage: "home",
  });
  });
  console.log("Registered Homes:", registeredHomes);
  
};
