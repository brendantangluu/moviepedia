import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";
import Header from "../components/Header";

function AppRouter(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/workshop" element = {<WorkShop/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter;
