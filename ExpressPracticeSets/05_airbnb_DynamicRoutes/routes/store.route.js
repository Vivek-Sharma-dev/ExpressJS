import express from "express";
import * as storeController from "../controllers/store.controller.js";

const storeRouter = express.Router();

storeRouter.get("/", storeController.showHomePage);
storeRouter.get("/store/booking", storeController.showBookingPage);
storeRouter.get("/store/favourites", storeController.showFavouritesPage);
storeRouter.get("/store/:id", storeController.showDetailsPage);

export default storeRouter;
