// controllers/userFunctionController.ts
import { Request, Response } from "express";
import { addUserFunction } from "../services/userFunctions";

export const createUserFunction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, code } = req.body;
    const func = new Function("return " + code)();
    addUserFunction(name, func);
    res.status(201).json({ message: "User function added successfully" });
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ error: "Error adding user function", details: err.message });
  }
};
