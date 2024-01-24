import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageSingle from "../pages/PageSingle";
import PageSingleAbout from "../pages/PageSingleAbout";
import PageSingleCast from "../pages/PageSingleCast";
import PageSingleReviews from "../pages/PageSingleReviews";
import PageSingleMore from "../pages/PageSingleMore";


function AppRouter(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/single/:id" element = {<PageSingle/>}/>
                <Route path ="/single:id/about" element = {<PageSingleAbout/>}/>
                <Route path ="/single:id/cast" element = {<PageSingleCast/>}/>
                <Route path ="/single:id/reviews" element = {<PageSingleReviews/>}/>
                <Route path ="/single:id/more" element = {<PageSingleMore/>}/>
            <Route path="/about" element = {<PageAbout/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

export default AppRouter;
