---
# 🛠️ Tailwind CSS v4 + Vite Integration: Common Issues & Solutions

## 📌 Overview

When upgrading to **Tailwind CSS v4** in a Laravel Inertia + Vue 3 + Vite stack, several configuration changes are required, especially for **PostCSS integration**. This document outlines a real-world issue and the corresponding solution.
---

## ❌ Problem Statement

After installing Tailwind CSS v4 and running the Vite dev server:

```bash
npm run dev
```

The following error occurred:

```
[vite] Internal server error: [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to
install `@tailwindcss/postcss` and update your PostCSS configuration.
```

---

## ✅ Root Cause

Tailwind CSS v4 decoupled its PostCSS plugin into a separate package:
👉 `@tailwindcss/postcss`

Using `tailwindcss` directly in `postcss.config.js` will now throw an error in Vite and other modern bundlers.

---

## 🧩 Solution Steps

### 1. 📦 Install the Required Plugin

```bash
npm install -D @tailwindcss/postcss
```

### 2. 🛠 Update `postcss.config.js`

#### If using CommonJS:

```js
module.exports = {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
    },
};
```

#### If using ESM (`type: "module"` in `package.json`):

```js
import postcssPlugin from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
    plugins: [postcssPlugin(), autoprefixer()],
};
```

> ⚠️ Do **not** use `require('tailwindcss')` or `tailwindcss: {}` in plugins — this will throw an error in v4+.

---

### 3. ✅ Ensure Correct CSS Entry File

In `resources/css/app.css`, only include the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. ♻ Clean and Restart

```bash
rm -rf node_modules .vite
npm install
npm run dev
```

---

## 📦 Final `package.json` Reference

Ensure the following packages are present in `devDependencies`:

```json
"tailwindcss": "^4.1.11",
"@tailwindcss/postcss": "^4.1.11",
"postcss": "^8.5.6",
"autoprefixer": "^10.4.21",
"vite": "^6.2.4"
```

---

## ✅ Status

After completing the above steps, Tailwind CSS v4 compiled successfully via Vite and the application rendered without error.
