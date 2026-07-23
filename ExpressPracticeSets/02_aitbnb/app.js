import express from "express"
import hostRouter from "./routes/host.route.js";
const PORT = 3000;

const app = express();
// encoded form data
app.use(express.urlencoded({ extended: true }));

// console method and past of every reqest
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// host routes
app.use("/host",  hostRouter)

app.get("/", (req, res) => {
  res.send(`
        <h1>Radhe Radhe everyone welcome to my task</h1>
        <a href="/host/add-home">Add Home</a>
        `);
});

// 404 page
app.use((req, res) => {
  res.status(404).send("404 page not found");
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
