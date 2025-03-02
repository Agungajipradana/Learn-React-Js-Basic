# Learn React JS Basic  

Welcome to **Learn React JS Basic** 🚀 This guide will help you get started with React using Vite, ensuring a smooth and efficient development experience.  

## Prerequisites  

Before diving into React, make sure you have a basic understanding of:  

✅ **JavaScript** – Core language features and ES6+ syntax.  
✅ **Node.js** – Required for running the development server.  
✅ **Vite** – A fast build tool optimized for modern web projects.  
✅ **TypeScript** (Optional) – Strongly recommended for better type safety.  

## Installation – Setting Up React with Vite  

To create a new React project using Vite, follow these steps:  

### 1️⃣ Install Vite and Create a React Project  
Run the following command in your terminal:  

```sh
# Using npm
npm create vite@latest my-react-app --template react  

# Using yarn
yarn create vite@latest my-react-app --template react  

# Using pnpm
pnpm create vite@latest my-react-app --template react  
```

> **Optional**: If you prefer using **TypeScript**, use the `--template react-ts` option:  
> ```sh
> npm create vite@latest my-react-app --template react-ts
> ```

### 2️⃣ Navigate to Your Project Folder  
```sh
cd my-react-app
```

### 3️⃣ Install Dependencies  
```sh
npm install  
```

### 4️⃣ Start the Development Server  
```sh
npm run dev  
```

This will start a local development server, and you can access your project at **`http://localhost:5173/`**. 🎉  

## Keeping React Updated  

To ensure optimal performance and access to the latest features, always use the latest version of React and ReactDOM:  

- [React (npm)](https://www.npmjs.com/package/react)  
- [ReactDOM (npm)](https://www.npmjs.com/package/react-dom)  

## Enhancing ESLint Configuration  

For production applications, we highly recommend integrating TypeScript and enabling type-aware lint rules. Check out the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to set up **TypeScript** and [`typescript-eslint`](https://typescript-eslint.io) in your project.  

---

💡 Now you're all set to start building amazing React applications! Happy coding! 🚀🎉