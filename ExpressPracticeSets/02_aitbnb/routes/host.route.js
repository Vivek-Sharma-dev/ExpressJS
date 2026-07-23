import express from "express";

const hostRouter = express.Router();

// host UI routes
hostRouter.get("/add-home", (req, res) => {
  res.send(`
            <h1>Add Home</h1>
            <form action="/host/add-home" method="POST">
                <input type="text" name="homeNmae" placeholder="Enter you're home name here" />
                <button type="submit">Submit</button>
            </form>
            `);
});

// host response routes
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);
  res.send(`
            <h1>Radhe Radhe everyone welcome to my task</h1>
            <a href="/host/add-home">Add Home</a>
            `);
});

export default hostRouter;
