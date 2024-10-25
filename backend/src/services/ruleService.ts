// services/ruleService.ts
import { Node } from "../models/Node";
import { validAttributes } from "../utils/attributeCatalog";
import { userFunctions } from "./userFunctions";

// Function to parse a rule string into an AST
export const parseRule = (ruleString: string): Node => {
  if (!validateRuleString(ruleString)) {
    throw new Error(
      "Invalid rule string: contains invalid attributes or types"
    );
  }

  // Parsing logic to convert rule string to AST
  return new Node("RULE_TYPE", undefined, undefined, ruleString);
};

// Function to combine multiple ASTs into a single AST
export const combineASTs = (asts: Node[]): Node => {
  // Combine logic here
  // Example of combining ASTs
  return new Node("COMBINED_RULE", undefined, undefined, asts);
};

// Function to evaluate an AST against provided data
export const evaluateAST = (ast: Node, data: any): boolean => {
  const evalNode = (node: Node): boolean => {
    if (!node) return true;

    // Check if the node is a user-defined function
    if (node.type === "FUNCTION" && userFunctions[node.value]) {
      return userFunctions[node.value](
        ...node.arguments.map((arg) => data[arg])
      );
    }

    // Add other evaluation logic for operators and operands here

    return true; // Placeholder
  };

  return evalNode(ast);
};

// Function to modify an existing AST based on provided modifications
export const modifyAST = (ast: Node, modifications: any): Node => {
  // Traverse the AST and apply modifications
  const applyModifications = (node: Node): Node => {
    if (node.left) node.left = applyModifications(node.left);
    if (node.right) node.right = applyModifications(node.right);

    // Example modification: change operators or operand values
    if (modifications[node.value]) {
      node.value = modifications[node.value];
    }

    return node;
  };

  return applyModifications(ast);
};

// Validation function to ensure rule string uses valid attributes
// services/ruleService.ts
export const validateRuleString = (ruleString: string): boolean => {
  if (!ruleString) return false;

  const regex = /(\b\w+\b)/g; // Simple regex to capture words
  const matches = ruleString.match(regex);

  if (!matches) return false;

  let expectingValue = false; // Track if the next token should be a value

  for (const match of matches) {
    if (expectingValue) {
      if (validAttributes[match] === "number" && isNaN(Number(match))) {
        console.log(`Invalid type for value: ${match}`);
        return false;
      }
      expectingValue = false;
      continue;
    }

    if (validAttributes.hasOwnProperty(match)) {
      expectingValue = true;
    } else if (!["AND", "OR", "NOT"].includes(match) && isNaN(Number(match))) {
      console.log(`Invalid attribute: ${match}`);
      return false;
    }
  }

  return true;
};
