import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CurrentThemeComponent from "./components/Theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <CurrentThemeComponent />
    </React.StrictMode>
);
