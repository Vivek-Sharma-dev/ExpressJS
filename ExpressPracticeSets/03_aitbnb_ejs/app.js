import express from "express";
import hostRouter from "./routes/host.route.js";
import userRouter from "./routes/user.route.js";
import path from "path";
import { fileURLToPath } from "url";
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// encoded form data
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(process.cwd(), "public")))

// console method and past of every reqest
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// host routes
app.use("/host", hostRouter);
app.use("/", userRouter);

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
