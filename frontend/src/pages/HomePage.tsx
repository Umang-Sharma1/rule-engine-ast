// src/pages/HomePage.tsx
import React from "react";
import RuleForm from "../components/RuleForm";
import RuleList from "../components/RuleList";
import EvaluateRuleForm from "../components/EvaluateRuleForm";
import ModifyRuleForm from "../components/ModifyRuleForm";
import CombineForm from "../components/CombineForm";
import UserFunctionForm from "../components/UserFunctionForm";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rule Engine</h1>
      <RuleForm />
      <RuleList />
      <EvaluateRuleForm />
      <ModifyRuleForm />
      <CombineForm />
      <UserFunctionForm />
    </div>
  );
};

export default HomePage;
