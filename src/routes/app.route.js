import { Router } from "express";
import userRouter from "./user.route.js";
import imageRouter from "./image.route.js";
import { deserializeAccount } from "../middlewares/auth.js";

const appRouter = Router();

const apiRouter = Router();

apiRouter.use("/image", imageRouter);

appRouter.use("/api", deserializeAccount, apiRouter);

appRouter.use("/auth", userRouter);

export default appRouter;
