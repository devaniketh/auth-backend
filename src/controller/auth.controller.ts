import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { hashPassword } from "../utils/hash";
import { generateJwtTokens } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
       res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const tokens = generateJwtTokens(user);

    res.status(201).json({ user, tokens });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
