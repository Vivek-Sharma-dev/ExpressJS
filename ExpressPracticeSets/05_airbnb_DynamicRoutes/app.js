import express from "express";
import hostRouter from "./routes/host.route.js";
import storeRouter from "./routes/store.route.js";
import path from "path";
import { showErrorPage } from "./controllers/errors.controller.js";
const PORT = 3000;

const app = express();
// encoded form data
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(process.cwd(), "public")));

// host routes
app.use("/host", hostRouter);
app.use("/", storeRouter);

// 404 page
app.use(showErrorPage);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
