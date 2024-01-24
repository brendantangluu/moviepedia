import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageSingle from "../pages/PageSingle";
import PageAbout from "../pages/PageAbout";


function AppRouter(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/single/:id" element = {<PageSingle/>}/>
            <Route path="/about" element = {<PageAbout/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

export default AppRouter;
