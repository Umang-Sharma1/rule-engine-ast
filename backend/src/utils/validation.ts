// utils/validation.ts
import { validAttributes } from "./attributeCatalog";

export const validateRuleString = (ruleString: string): boolean => {
  const regex = /(\b\w+\b)/g; // Simple regex to capture words
  const matches = ruleString.match(regex);

  if (!matches) {
    console.log("No matches found");
    return false;
  }

  for (const match of matches) {
    console.log("Checking:", match);
    if (!validAttributes.hasOwnProperty(match)) {
      console.log("Invalid attribute:", match);
      continue; // Skip if it's not an attribute
    }

    const attrType = validAttributes[match];
    if (attrType === "number" && isNaN(Number(match))) {
      console.log("Invalid type for:", match);
      continue; // Skip if it's an attribute but not its value
    }
  }

  return true;
};
