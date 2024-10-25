// controllers/ruleController.ts
import { Request, Response } from "express";
import {
  parseRule,
  combineASTs,
  evaluateAST,
  modifyAST,
} from "../services/ruleService";
import RuleModel from "../models/ruleModel";

export const createRule = async (req: Request, res: Response) => {
  try {
    const { ruleString } = req.body;
    const ast = parseRule(ruleString);
    const rule = new RuleModel({ ruleString, ast });
    await rule.save();
    res.status(201).json(rule);
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ error: "Error creating rule", details: err.message });
  }
};

export const combineRules = async (req: Request, res: Response) => {
  try {
    const { rules } = req.body;
    const combinedAST = combineASTs(rules.map(parseRule));
    res.status(200).json(combinedAST);
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ error: "Error combining rules", details: err.message });
  }
};

export const evaluateRule = async (req: Request, res: Response) => {
  try {
    const { ast, data } = req.body;
    const result = evaluateAST(ast, data);
    res.status(200).json(result);
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ error: "Error evaluating rule", details: err.message });
  }
};

export const modifyRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ruleId, modifications } = req.body;
    const rule = await RuleModel.findById(ruleId);

    if (!rule) {
      res.status(404).json({ error: "Rule not found" });
      return;
    }

    const modifiedAST = modifyAST(rule.ast, modifications);
    rule.ast = modifiedAST;
    await rule.save();

    res.status(200).json(rule);
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ error: "Error modifying rule", details: err.message });
  }
};
