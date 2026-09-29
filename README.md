# 🥗 Child Nutrition Assistant

A full-stack web application that acts as an AI-powered nutrition assistant for parents, generating customized, step-by-step Indian-style recipes based on available household ingredients and the child's age.

---

## 🚀 Features
* **Interactive Chat Interface:** A WhatsApp-inspired web UI for chatting with the AI chef.
* **Age-Specific Guidance:** Tailors recipes and health benefits according to the child's age.
* **AI-Powered Backend:** Built with FastAPI and powered by the Groq API  for fast and intelligent responses.
* **CORS Enabled:** Seamlessly connects frontend JavaScript to the local Python server.

---

## 📂 Project Structure

```text
NUTRITION_Chatbot/
│
├── main.py              # FastAPI backend server[cite: 6]
├── requirements.txt     # Python dependencies
├── index.html           # Frontend chat interface
├── style.css            # Styling (WhatsApp theme)[cite: 3]
├── script.js            # Frontend logic & API fetch requests[cite: 2]
├── recipes.json         # Local recipe database backup[cite: 8]
├── nutrition.py         # Helper script for local recipe lookup[cite: 7]
├── .env                 # Environment variables (API keys - DO NOT COMMIT)
└── README.md            # Project documentation
