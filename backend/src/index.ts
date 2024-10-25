// index.ts
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import ruleRoutes from "./routes/ruleRoutes";
import userFunctionRoutes from "./routes/userFunctionRoutes";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // Ensure JSON middleware is used

// Test route to check server connection
app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is up and running!" });
});

// Routes
app.use("/api/rules", ruleRoutes);
app.use("/api/functions", userFunctionRoutes);

// Handle non-existent routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
