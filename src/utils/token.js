import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/env.js";

function createToken(user) {
  const { password: _, ...payload } = user;
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

export { createToken };
