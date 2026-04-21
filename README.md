📘 Understanding Gherkin and Cucumber
📌 Overview

This repository demonstrates the use of Gherkin syntax and Cucumber framework for Behavior-Driven Development (BDD). It focuses on writing clear, human-readable test scenarios and automating them using modern testing tools.

The goal is to bridge the gap between technical and non-technical stakeholders by using plain language to define system behavior.

🎯 Objectives
Understand BDD principles
Write test scenarios using Gherkin syntax
Implement step definitions using Cucumber
Automate real-world test cases
Validate application behavior through end-to-end testing
🧠 What is Gherkin?

Gherkin is a domain-specific language used to describe software behavior in a structured, readable format.

Example:
Feature: Wallet withdrawal validation

  Scenario: Successful withdrawal
    Given the wallet is ready for withdrawal
    When the user attempts to withdraw 200
    Then the transaction status should be "SUCCESS"
⚙️ What is Cucumber?

Cucumber is a testing tool that executes Gherkin scenarios by mapping them to code (step definitions).

It allows:

Automated acceptance testing
Clear collaboration between QA, Devs, and Business
Reusable test steps
🏗️ Project Structure
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
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/Understanding-Gherkin-and-Cucumber.git
cd Understanding-Gherkin-and-Cucumber
2️⃣ Install dependencies
npm install
3️⃣ Run tests
npx cucumber-js
🧪 Sample Test Cases Covered
✅ Valid wallet withdrawal
❌ Withdrawal exceeding limits
⚠️ Boundary value testing
🔒 Validation scenarios
🛠️ Tech Stack
TypeScript
Cucumber.js
Node.js
Gherkin (BDD)
📊 Key Learnings
Writing readable and maintainable test cases
Mapping business requirements to automated tests
Structuring scalable automation frameworks
Identifying defects through scenario validation
🐞 Defects Identified (Examples)
Users could enter invalid phone numbers and still proceed
Missing validation on withdrawal limits
Edge cases not properly handled in transaction processing
🤝 Contribution

Feel free to fork this repository and improve the test scenarios or framework structure.

📄 License

This project is for educational purposes.

👤 Author

Yanda Kiviet
