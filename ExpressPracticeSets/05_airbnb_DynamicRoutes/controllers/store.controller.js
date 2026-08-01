import { Home } from "../models/home.js";

export const showHomePage = (req, res) => {
  Home.getAllHomes( registeredHomes => {
    res.render("store/index", {
    registeredHomes,
    title: "Home - Airbnb",
    currentPage: "home",
  });
  console.log("Registered Homes:", registeredHomes);
  });
  
};

export const showDetailsPage = (req, res) => {
  const id = req.params.id;
  Home.getHomeById(id, (home) => {
    if (home) {
      res.render("store/details", {
        home,
        title: "Home Details - Airbnb",
        currentPage: "homeDetails",
      });
    } else {
      res.status(404).render("comman/errorPage", {
        title: "Error - Airbnb",
        error: "Home not found",
        currentPage: "error",
      });
    }
  });
};

export const showBookingPage = (req, res) => {
  console.log("Booking page requested");
  res.render("store/booking", {
    title: "Booking - Airbnb",
    currentPage: "booking",
  });
}

export const showFavouritesPage = (req, res) => {
  res.render("store/favourites", {
    title: "Favourites - Airbnb",
    currentPage: "favourites",
  });
}