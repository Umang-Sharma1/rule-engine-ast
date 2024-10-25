// routes/ruleRoutes.ts
import { Router } from "express";
import {
  createRule,
  combineRules,
  evaluateRule,
  modifyRule,
} from "../controllers/ruleController";
import RuleModel from "../models/ruleModel"; // Ensure this import is correct

const router = Router();

router.post("/create-rule", createRule);
router.post("/combine-rules", combineRules);
router.post("/evaluate-rule", evaluateRule);
router.put("/modify-rule", modifyRule);

// Add a new route to get all rules
router.get("/", async (req, res) => {
  try {
    const rules = await RuleModel.find();
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch rules" });
  }
});

export default router;
