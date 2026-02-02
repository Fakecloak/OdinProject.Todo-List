1. Initialize your project
If you don’t already have a package.json:

bash
npm init -y

2. Install webpack and webpack‑cli
bash
npm install --save-dev webpack webpack-cli
webpack → the bundler itself

webpack-cli → lets you run webpack from the command line

3. Create project structure
Typical layout:

Code
project/
├── src/
│   └── index.js
├── dist/
│   └── index.html
└── package.json

4. Add a webpack config (optional but recommended)
Create webpack.config.js in the root:

js
const path = require("path");

module.exports = {
  entry: "./src/index.js",        // starting point
  output: {
    filename: "main.js",          // bundled file name
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development"             // or "production"
};

5. Add npm scripts
In package.json:

json
"scripts": {
  "build": "webpack",
  "watch": "webpack --watch"
}
6. Run webpack
One‑time build:

bash
npm run build
Continuous build (auto‑rebuild on changes):

bash
npm run watch
7. Open your app
Open dist/index.html in the browser — it will load the bundled main.js.