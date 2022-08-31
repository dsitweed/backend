import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/env.js";
import { UNAUTHORIZED_ACCESS } from "../constants/message.js";

function deserializeAccount(req, res, next) {
  const token = req.cookies["token"];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    console.log(payload);
    req.accountId = payload.id;
    req.role = payload.role;
  } catch (error) {
    return res.status(403).json({ message: UNAUTHORIZED_ACCESS, error });
  }
  next();
}

function requireAdmin(req, res, next) {
  const token = req.cookies["token"];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role === "ADMIN") {
      next();
    } else {
      return res.status(403).json({ message: "Only admin can do this!" });
    }
  } catch (error) {
    return res.status(403).json({ message: UNAUTHORIZED_ACCESS, error });
  }
}

export { deserializeAccount, requireAdmin };
