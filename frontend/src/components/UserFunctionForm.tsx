// src/components/UserFunctionForm.tsx
import React, { useState } from "react";
import { createUserFunction } from "../services/api";
import { toast } from "react-toastify";
import styles from "./UserFunctionForm.module.css";

const UserFunctionForm: React.FC = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createUserFunction(name, code);
      console.log("User function created:", response.data);
      setName("");
      setCode("");
      setError(null);
      toast.success("User function created successfully!");
    } catch (error) {
      console.error("Error creating user function:", error);
      setError("Failed to create user function. Please try again.");
      toast.error("Failed to create user function.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.title}>Add User Function</h3>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Function
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

export default UserFunctionForm;
