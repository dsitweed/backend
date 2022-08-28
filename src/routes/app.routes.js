import { Router } from "express";
import authRouter from "./auth.routes.js";
import { deserializeAccount } from "../middlewares/auth.js";
import apiRouter from "./api.routes.js";

const appRouter = Router();

appRouter.use("/api", deserializeAccount, apiRouter);

appRouter.use("/auth", authRouter);

export default appRouter;
