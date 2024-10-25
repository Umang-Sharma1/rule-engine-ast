// src/components/CombineRulesForm.tsx
import React, { useState } from "react";
import { combineRules } from "../services/api";
import { toast } from "react-toastify";
import styles from "./CombineForm.module.css";

const CombineRulesForm: React.FC = () => {
  const [rules, setRules] = useState("");
  const [combinedAST, setCombinedAST] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedRules = JSON.parse(rules);
      const response = await combineRules(parsedRules);
      setCombinedAST(response.data);
      setRules("");
      setError(null); // Clear any previous errors
      toast.success("Rules combined successfully!");
    } catch (error) {
      console.error("Error combining rules:", error);
      setError("Failed to combine rules. Please try again.");
      toast.error("Failed to combine rules.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rules:</label>
          <textarea
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Combine Rules
        </button>
        {combinedAST && (
          <div className={styles.result}>
            Combined AST: {JSON.stringify(combinedAST)}
          </div>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

export default CombineRulesForm;
