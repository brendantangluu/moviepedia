import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageWatchList from "../pages/PageWatchList";
import PageSingle from "../pages/PageSingle";
import { GlobalProvider } from "../context/GlobalContext";
import Favourites from "../pages/PageFavourites";


function AppRouter(){
    return(
    <BrowserRouter>
        <GlobalProvider>
            <Header/>
            <Routes>
                <Route path="/" element = {<PageHome/>} />
                <Route path="/single/:id/about" element = {<PageSingle/>}/>
                <Route path="/about" element = {<PageAbout/>}/>
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/watchlist" element={<PageWatchList />} />
            </Routes>
            <Footer/>
        </GlobalProvider>
    </BrowserRouter>
    )
}

export default AppRouter;
