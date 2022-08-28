import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { BACKEND_PORT, HOSTNAME } from "./constants/env.js";
import appRouter from "./routes/app.routes.js";

const main = async () => {
  const app = express();

  app.use(express.json({ limit: "30mb", extended: true }));

  app.use(express.urlencoded({ limit: "30mb", extended: true }));

  app.use(cookieParser());

  app.use(cors());

  app.use(appRouter);

  app.listen(BACKEND_PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${BACKEND_PORT}`);
  });
};

main().catch((error) => console.log(error));
