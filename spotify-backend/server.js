import express from "express";
import cors from "cors";
import "dotenv/config";

import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

// Routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// App Listen
app.listen(port, () => console.log(`Server started on http://127.0.0.1:${port}`));
