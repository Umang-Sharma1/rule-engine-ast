// src/services/api.ts
import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const createRule = (ruleString: string) => {
  return axios.post(`${API_URL}/rules/create-rule`, { ruleString });
};

export const modifyRule = (ruleId: string, modifications: any) => {
  return axios.put(`${API_URL}/rules/modify-rule`, { ruleId, modifications });
};

export const evaluateRule = (ast: any, data: any) => {
  return axios.post(`${API_URL}/rules/evaluate-rule`, { ast, data });
};

export const getRules = () => {
  return axios.get(`${API_URL}/rules`);
};

// Add missing API functions
export const combineRules = (rules: string[]) => {
  return axios.post(`${API_URL}/rules/combine-rules`, { rules });
};

export const createUserFunction = (name: string, code: string) => {
  return axios.post(`${API_URL}/functions/add-function`, { name, code });
};
