import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { hashPassword } from "../utils/hash";
import { generateJwtTokens } from "../utils/jwt";
import { comparePassword } from "../utils/hash";

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
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }
  
      const isMatch = await comparePassword(password, user.password);
  
      if (!isMatch) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }
  
      const tokens = generateJwtTokens(user);
      console.log(user,tokens)
   
  
      res.status(200).json({ user, tokens });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
