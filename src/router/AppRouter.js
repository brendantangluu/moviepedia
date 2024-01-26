import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageSingle from "../pages/PageSingle";
import { GlobalProvider } from "../context/GlobalContext";


function AppRouter(){
    return(
    <BrowserRouter>
        <GlobalProvider>
            <Header/>
            <Routes>
                <Route path="/" element = {<PageHome/>} />
                <Route path="/single/:id/about" element = {<PageSingle/>}/>
                <Route path="/about" element = {<PageAbout/>}/>
            </Routes>
            <Footer/>
        </GlobalProvider>
    </BrowserRouter>
    )
}

export default AppRouter;
