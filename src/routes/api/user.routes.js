import { Router } from "express";
import { prisma } from "../../config/db.js";
import {
  SUCCESS,
  UNAUTHORIZED_ACCESS,
  USER_NOT_FOUND,
} from "../../constants/message.js";
import AccountController from "../../controllers/account.controller.js";
import { requireAdmin } from "../../middlewares/auth.js";

const userRouter = Router();

userRouter.get("/", requireAdmin, AccountController.getAll);

userRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  if (req.role !== "ADMIN" && req.accountId !== id) {
    return res.json({ message: UNAUTHORIZED_ACCESS });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.account.findUnique({ where: { id } });
  if (!user) {
    return res.json({ message: USER_NOT_FOUND });
  }
  const result = await prisma.account.delete({ where: { id } });
  return res.json({ message: SUCCESS, payload: result });
});

export default userRouter;
