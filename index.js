require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const clubs_routes = require("./routes/clubs");
const Registration = require("./routes/registration");
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hi ,i am Live");
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use("/api/clubs", clubs_routes);
app.use("/api", Registration);
/* app.use("/api/getAllClubs", products_routes); */

const start = async () => {
  try {
    console.log("connect db");
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
