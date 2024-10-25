// src/components/ModifyRuleForm.tsx
import React, { useState } from "react";
import { modifyRule } from "../services/api";
import { toast } from "react-toastify";
import styles from "./ModifyRuleForm.module.css";

const ModifyRuleForm: React.FC = () => {
  const [ruleId, setRuleId] = useState("");
  const [modifications, setModifications] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedModifications = JSON.parse(modifications);
      const response = await modifyRule(ruleId, parsedModifications);
      console.log("Rule modified:", response.data);
      setRuleId("");
      setModifications("");
      setError(null); // Clear any previous errors
      toast.success("Rule modified successfully!");
    } catch (error) {
      console.error("Error modifying rule:", error);
      setError("Failed to modify rule. Please try again.");
      toast.error("Failed to modify rule.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rule ID:</label>
          <input
            type="text"
            value={ruleId}
            onChange={(e) => setRuleId(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Modifications:</label>
          <textarea
            value={modifications}
            onChange={(e) => setModifications(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Modify Rule
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

export default ModifyRuleForm;
