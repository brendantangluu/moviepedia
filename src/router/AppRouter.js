import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";

function AppRouter(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/workshop" element = {<WorkShop/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter;
