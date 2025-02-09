import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your global CSS styles if applicable
import App from "./App.jsx"; // Import the App component

// Create a root element where React will render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
