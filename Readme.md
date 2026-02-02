# 🚀 Webpack Starter Project

A simple, beginner-friendly Webpack setup to bundle JavaScript files.

Perfect for learning Webpack or starting a small frontend project.

---

## 📦 Prerequisites

Make sure you have **Node.js** installed.

Check using:
```bash
node -v
npm -v
```

---

## 🛠 Project Setup

### 1️⃣ Initialize the project

Create `package.json`:
```bash
npm init -y
```

---

### 2️⃣ Install Webpack

Install Webpack and Webpack CLI as development dependencies:
```bash
npm install --save-dev webpack webpack-cli
```

**What they do:**
- `webpack` → Bundles your JavaScript
- `webpack-cli` → Lets you run webpack from the terminal

---

## 🗂 Project Structure

```text
project/
├── src/
│   └── index.js
├── dist/
│   └── index.html
├── webpack.config.js
└── package.json
```

---

## ⚙️ Webpack Configuration

Create `webpack.config.js` in the root directory:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
```

---

## ▶️ NPM Scripts

Add this inside `package.json`:

```json
"scripts": {
  "build": "webpack",
  "watch": "webpack --watch"
}
```

---

## 🚀 Run the Project

### One-time build
```bash
npm run build
```

### Auto rebuild on file changes
```bash
npm run watch
```

---

## 🌐 Open in Browser

Open the following file in your browser:
```text
dist/index.html
```

The bundled JavaScript file will be:
```text
dist/main.js
```

---

## ✅ Done!

Your Webpack setup is ready 🎉  
You can now extend it with loaders, plugins, or frameworks like React.

---

Happy Coding 💙
