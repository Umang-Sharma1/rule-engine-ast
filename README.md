# Rule Engine with AST

## Overview
This project is a Rule Engine application that uses an Abstract Syntax Tree (AST) to represent conditional rules. The system allows dynamic creation, combination, and evaluation of rules to determine user eligibility based on attributes like age, department, income, and spend.

## Features
- Create, modify, combine, and evaluate rules
- User-defined functions for advanced rule conditions
- Express backend with MongoDB
- React frontend with TypeScript and Vite
- Notifications using React Toastify
- Responsive design and user-friendly interface

## Prerequisites
- Node.js (v14 or above)
- npm or yarn
- MongoDB

## Installation

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/rule-engine.git
    cd rule-engine/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and add your MongoDB URI:
    ```env
    MONGO_URI=mongodb://localhost:27017/rule-engine
    ```

4. Run the backend server:
    ```sh
    npm run dev
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the frontend server:
    ```sh
    npm run dev
    ```

## API Endpoints
- **Create Rule**: `POST /api/rules/create-rule`
- **Modify Rule**: `PUT /api/rules/modify-rule`
- **Evaluate Rule**: `POST /api/rules/evaluate-rule`
- **Get All Rules**: `GET /api/rules`
- **Combine Rules**: `POST /api/rules/combine-rules`
- **Add User-Defined Function**: `POST /api/functions/add-function`

## Frontend
The frontend is built using React, Vite, and TypeScript. It provides forms to create, modify, and evaluate rules, along with a list of all rules.

### Components
- **RuleForm**: Form to create rules
- **ModifyRuleForm**: Form to modify existing rules
- **EvaluateRuleForm**: Form to evaluate rules against provided data
- **RuleList**: Displays all rules with their IDs

## Project Structure
```markdown
/rule-engine
  /backend
    /src
      /config
      /controllers
      /models
      /routes
      /services
      /utils
      index.ts
    .env
    package.json
  /frontend
    /src
      /components
        EvaluateRuleForm.tsx
        EvaluateRuleForm.module.css
        ModifyRuleForm.tsx
        ModifyRuleForm.module.css
        RuleForm.tsx
        RuleForm.module.css
        RuleList.tsx
        RuleList.module.css
      /pages
        HomePage.tsx
        HomePage.module.css
      /services
        api.ts
      App.tsx
      main.tsx
    package.json
README.md
