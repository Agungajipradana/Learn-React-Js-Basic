// Importing createRoot from ReactDOM to create a root for rendering the application
import { createRoot } from "react-dom/client";

// Importing the HelloWorld component from the local HelloWorld.jsx file
import HelloWorld from "./HelloWorld";

// Importing StrictMode from React to help detect potential issues in the application
import { StrictMode } from "react";

// Selecting the HTML element with the id "root" and creating a React root
createRoot(document.getElementById("root")).render(
  // Using StrictMode to wrap the application for highlighting potential problems
  <StrictMode>
    {/* Rendering the HelloWorld component inside the root */}
    <HelloWorld />
  </StrictMode>
);
