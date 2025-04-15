
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { log } from "node:console";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "access-secret";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refresh-secret";

export const generateJwtTokens = (user: User) => {
  const payload = { userId: user.id, email: user.email };

  const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });

  return { accessToken, refreshToken };
};
