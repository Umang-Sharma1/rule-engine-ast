// src/components/RuleList.tsx
import React, { useEffect, useState } from "react";
import { getRules } from "../services/api";
import { Rule } from "../types/rule";
import styles from "./RuleList.module.css";

const RuleList: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await getRules();
        setRules(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching rules:", error);
        setError("Failed to fetch rules");
      }
    };

    fetchRules();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rules</h2>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.ruleList}>
        {rules.map((rule) => (
          <li key={rule._id} className={styles.ruleItem}>
            <div className={styles.ruleString}>{rule.ruleString}</div>
            <div className={styles.ruleId}>ID: {rule._id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RuleList;
