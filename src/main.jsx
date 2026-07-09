import React  from "react";
import ReactDOM  from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Parent from "./latihan/Parent.jsx";
import { CounterContextProvider } from "./Context/counterContext.jsx";
import { ThemeContextProvider } from "./Context/themeContext.jsx";
import Form from "./latihan/Form.jsx";
import { AuthContextProvider } from "./Context/authContext.jsx";
import { DarkModeContextProvider } from "./Context/darkModeContext.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);