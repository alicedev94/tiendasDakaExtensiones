import express from "express";
import cors from "cors";
const app = express();
require("dotenv").config();

// settings
app.set("port", process.env.APP_PORT || 3000);

// middlewares
app.use(express.json());
app.use(cors());

export default app;
