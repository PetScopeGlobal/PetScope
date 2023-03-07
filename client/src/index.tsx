import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { PetProvider } from "./context/PetProvider";
import { OrgProvider } from "./context/OrgProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <PetProvider>
            <OrgProvider>
                <App />
            </OrgProvider>
        </PetProvider>
    </React.StrictMode>
);
