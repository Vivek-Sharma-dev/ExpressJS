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
  res.render("store/details", {
    title: "Home Details - Airbnb",
    currentPage: "homeDetails",
  });
}

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