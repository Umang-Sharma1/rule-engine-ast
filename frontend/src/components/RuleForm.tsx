// src/components/RuleForm.tsx
import React, { useState } from "react";
import { createRule } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./RuleForm.module.css";

const RuleForm: React.FC = () => {
  const [ruleString, setRuleString] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createRule(ruleString);
      console.log("Rule created:", response.data);
      setRuleString(""); // Clear input after submit
      setError(null); // Clear any previous errors
      toast.success("Rule created successfully!");
    } catch (error) {
      console.error("Error creating rule:", error);
      setError("Failed to create rule. Please try again.");
      toast.error("Failed to create rule.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rule:</label>
          <input
            type="text"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Create Rule
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

export default RuleForm;
