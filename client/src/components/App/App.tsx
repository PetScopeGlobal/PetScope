import "../../styles/App.css";
import Home from "../../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../../pages/Test/Test";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/org/:orgId" element={<Home />} />
                <Route path="/pet/:petId" element={<Home />} />
                <Route path="/orgs" element={<Home />} />
                <Route path="/pets" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}
