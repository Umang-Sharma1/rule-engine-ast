// src/components/EvaluateRuleForm.tsx
import React, { useState } from "react";
import { evaluateRule } from "../services/api";
import { toast } from "react-toastify";
import styles from "./EvaluateRuleForm.module.css";

const EvaluateRuleForm: React.FC = () => {
  const [ast, setAst] = useState("");
  const [data, setData] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedAst = JSON.parse(ast);
      const parsedData = JSON.parse(data);
      const response = await evaluateRule(parsedAst, parsedData);
      setResult(response.data);
      setError(null); // Clear any previous errors
      toast.success("Rule evaluated successfully!");
    } catch (error) {
      console.error("Error evaluating rule:", error);
      setError("Failed to evaluate rule. Please try again.");
      toast.error("Failed to evaluate rule.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>AST:</label>
          <textarea
            value={ast}
            onChange={(e) => setAst(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Data:</label>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Evaluate Rule
        </button>
        {result !== null && (
          <div className={styles.result}>Result: {result.toString()}</div>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

export default EvaluateRuleForm;
