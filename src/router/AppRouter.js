import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/workshop" element = {<WorkShop/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

export default AppRouter;
