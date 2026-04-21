📘 **Understanding Gherkin and Cucumber**
------------------------------------------------------------
📌 **Overview**

This repository demonstrates the use of Gherkin syntax and Cucumber framework for Behavior-Driven Development (BDD). 

It focuses on writing clear, human-readable test scenarios and automating them using modern testing tools.

The goal is to bridge the gap between technical and non-technical stakeholders by using plain language to define system behavior.

🎯 **Objectives**

Understand BDD principles

Write test scenarios using Gherkin syntax

Implement step definitions using Cucumber

Automate real-world test cases

Validate application behavior through end-to-end testing


🧠 **What is Gherkin?**

Gherkin is a domain-specific language used to describe software behavior in a structured, readable format.

Example:
Feature: Wallet withdrawal validation

  Scenario: Successful withdrawal
  
    Given the wallet is ready for withdrawal
    
    When the user attempts to withdraw 200
    
    Then the transaction status should be "SUCCESS"
    
⚙️ **What is Cucumber?**

Cucumber is a testing tool that executes Gherkin scenarios by mapping them to code (step definitions).

It allows:

1. Automated acceptance testing
2. Clear collaboration between QA, Devs, and Business
3. Reusable test steps

🏗️ **Project Structure**
📦 project-root

 ┣ 📂 features
 
 ┃ ┣ 📜 wallet.feature
 
 ┃ ┗ 📂 step-definitions
 
 ┃    ┗ 📜 wallet.ts
 
 ┣ 📂 support
 
 ┃ ┗ 📜 hooks.ts
 
 ┣ 📜 package.json
 
 ┣ 📜 tsconfig.json
 
 ┗ 📜 README.md
 

🛠️ **Tech Stack**

TypeScript

Cucumber.js

Node.js

Gherkin (BDD)

📊 **Key Learnings**
Writing readable and maintainable test cases

Mapping business requirements to automated tests

Structuring scalable automation frameworks

Identifying defects through scenario validation


📄 License

This project is for educational purposes.

👤 Author

Yanda Kiviet
