const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`The path is ${req.path}`);
  next();
});

app.use()
app.use((req, res, next) => {
  console.log(`The Method is ${req.method}`);
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>Radhe Radhe everyone welcome to my task</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("enter");
  res.send(`
            <H2>Submit your form</H2>
            <form action="/contact-us"j method="POST">
                <input type = "text" name="name" placeholder="Enter you name here" />
                <input type = "text" name="email" placeholder="Enter you email here" />
                <button type = "submit">Submit</button>
            </form>
            `);
});

app.post("/contact-us", (req, res) => {
  res.send("We got your response");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
