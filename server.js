import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

dotenv.config();
const app = express();

connectDb();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`.bgBlack.white);
});
