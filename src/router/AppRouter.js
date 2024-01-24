import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Watchlist from "../pages/PageWatchList";

function AppRouter(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<PageHome/>} />
            <Route path="/workshop" element = {<WorkShop/>}/>
            <Route path="/PageWatchList" element ={<Watchlist/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

export default AppRouter;
