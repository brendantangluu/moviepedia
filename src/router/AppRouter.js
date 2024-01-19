import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";

function AppRouter(){
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
        </Routes>
    </BrowserRouter>)
}

export default AppRouter;
