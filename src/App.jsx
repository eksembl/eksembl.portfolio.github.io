import {HashRouter, Routes, Route} from "react-router";
import Home from "./components/Page/Home.jsx";
import Projects from "./components/Page/Projects.jsx";
import NotFound from "./components/Page/NotFound.jsx";
import HeaderPage from "./components/Header/HeaderPage.jsx";

export default function App() {
    return (
        <HashRouter>
            <HeaderPage/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </HashRouter>
    );
}