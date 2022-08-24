import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/env.js";

function deserializeAccount(req, res, next) {
  const token = req.cookies["token"];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const email = payload.email;
    req.email = email;
  } catch (error) {
    return res.status(403).json({ message: "Unauthoriz... request", error });
  }
  next();
}

export { deserializeAccount };
