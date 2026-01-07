# 📘 RelationalSQL Lab – Backend Documentation (SQL Lab)

## 🔍 Overview

- RelationalSQL Lab is a learning-focused backend system designed to serve structured SQL learning content using clean APIs.

- This backend follows a content-driven architecture, where:

- Learning content is stored in JSON files

- Backend APIs read and serve this content

- Frontend is responsible only for rendering UI

🎯 Goal:
Help learners understand SQL concepts using real examples and structured explanations, not just theory.

## 🧱 Backend Architecture (Current Scope)

This documentation covers SQL Lab only.

### ✅ What is implemented

- Express backend setup

- SQL Lab APIs

- JSON-based content storage

- Clean routing and controller separation

## 🧠 Design Philosophy

### 1️⃣ Content ≠ Database

SQL learning content:

- Does not change frequently

- Is read-only

- Does not require a database

Hence, all SQL topics are stored as JSON files, not in PostgreSQL.

### 2️⃣ One Topic = One JSON File

Each SQL topic has:

- One API endpoint

- One JSON file

- One responsibility

Example:

```http

/api/sql/topic/intro → data/sql/intro.json

```

## 🔌 API Endpoints

📌 Get All SQL Topics (Cards View)

```http
GET /api/sql/topics

```

📌 Get Single SQL Topic Content

```http
GET /api/sql/topic/:topicName
```

```http
GET /api/sql/topic/intro

```

## 🧩 Controller Logic

sql.controller.js
Responsibilities:

- Handle request parameters

- Call utility functions

- Return JSON responses

- Handle missing topics gracefully

## 🛣️ Routing Structure

sql.routes.js

```js
router.get("/topics", getSqlTopics);
router.get("/topic/:topicName", getSqlTopicByName);
```

Registered in app.js as:

```js
app.use("/api/sql", sqlRoutes);
```

## 🧰 Utility Function

readJSON.js
Purpose:

- Centralized JSON file reading

- Keeps controllers clean

- Easy to reuse

## 🔒 Error Handling

- If a topic JSON file does not exist:

  - Backend returns 404

  - Message: "SQL topic not found"

This prevents server crashes and keeps APIs predictable
