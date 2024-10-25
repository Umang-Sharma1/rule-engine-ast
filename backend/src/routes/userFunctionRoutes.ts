// routes/userFunctionRoutes.ts
import { Router } from "express";
import { createUserFunction } from "../controllers/userFunctionController";

const router = Router();

router.post("/add-function", createUserFunction);

export default router;
