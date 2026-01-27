const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Menu API is running 🚀",
    tryThese: ["GET /api/selections", "GET /api.items", "GET /api/tags"],
  });
});

app.use(routes);
