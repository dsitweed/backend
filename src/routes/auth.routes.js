import bcrypt from "bcrypt";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";
import { JWT_SECRET } from "../constants/env.js";
import {
  EXISTED_EMAIL,
  INTERNAL_SERVER_ERROR,
  INVALID_CREDENTIALS,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from "../constants/message.js";
const authRouter = Router();

authRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.account.findUnique({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: INVALID_CREDENTIALS });
    }
    const token = jwt.sign(
      { email, id: user.id, displayName: user.displayName, role: user.role },
      JWT_SECRET
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    res.json({ message: LOGIN_SUCCESS, payload: jwt.decode(token) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: INTERNAL_SERVER_ERROR, error });
  }
});

authRouter.post("/sign-up", async (req, res) => {
  const { displayName, email, password } = req.body;
  try {
    const user = await prisma.account.findUnique({ where: { email } });
    if (user) {
      return res.status(401).json({ message: EXISTED_EMAIL });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.account.create({
      data: {
        email,
        password: hashedPassword,
        displayName,
      },
    });
    const token = jwt.sign(
      { email, id: newUser.id, displayName, role: newUser.role },
      JWT_SECRET
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    res.json({ message: REGISTER_SUCCESS, payload: jwt.decode(token) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: INTERNAL_SERVER_ERROR, error });
  }
});

authRouter.post("/sign-out", async (_req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Sign out" });
});

export default authRouter;
