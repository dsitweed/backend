import { Router } from "express";
import imageRouter from "./api/image.routes.js";
import userRouter from "./api/user.routes.js";

const apiRouter = Router();

apiRouter.use("/image", imageRouter);

apiRouter.use("/user", userRouter);

export default apiRouter;
