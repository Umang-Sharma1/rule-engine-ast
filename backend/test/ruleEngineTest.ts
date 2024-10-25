// test/ruleEngineTest.ts
import {
  parseRule,
  combineASTs,
  evaluateAST,
} from "../src/services/ruleService";
import { Node } from "../src/models/Node";

const testEvaluateRule = () => {
  const rule1 =
    "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)";
  const rule2 =
    "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)";

  const ast1 = parseRule(rule1);
  const ast2 = parseRule(rule2);

  const combinedAST = combineASTs([ast1, ast2]);

  const testData1 = {
    age: 35,
    department: "Sales",
    salary: 60000,
    experience: 3,
  };
  const testData2 = {
    age: 24,
    department: "Marketing",
    salary: 30000,
    experience: 2,
  };
  const testData3 = {
    age: 40,
    department: "Marketing",
    salary: 18000,
    experience: 6,
  };

  console.log("Test Data 1 Result:", evaluateAST(ast1, testData1)); // Should be true
  console.log("Test Data 2 Result:", evaluateAST(ast1, testData2)); // Should be true
  console.log("Test Data 3 Result:", evaluateAST(ast2, testData3)); // Should be true
};

testEvaluateRule();
