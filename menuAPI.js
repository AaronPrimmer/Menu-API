const express = require("express");
const sequelize = require("./config/connection");
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

sequelize
  .sync()
  .then(() => {
    console.log("Database connected & models synced");
    console.log(`Server listening on http://localhost:${PORT}`);
    app.listen(PORT);
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
