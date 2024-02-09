import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageWatchList from "../pages/PageWatchList";
import PageSingle from "../pages/PageSingle";
import { GlobalProvider } from "../context/GlobalContext";
import Favourites from "../pages/PageFavourites";
import PageSearch from "../pages/PageSearch";
import Headertest from "../components/Header";



function AppRouter(){
    return(
    <BrowserRouter>
        {/* We wrap everything with GlobalProvider so other pages can 
        reference and use favourite and watching functionality */}
        <GlobalProvider>
            <Headertest />
            <Routes>
                <Route path="/" element = {<PageHome/>} />
                <Route path="/single/:id/about" element = {<PageSingle/>}/>
                <Route path="/about" element = {<PageAbout/>}/>
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/watchlist" element={<PageWatchList />} />
                <Route path="/search/:key" element={<PageSearch />} />
                <Route path='/header' element={<Header />} />
            </Routes>
            <Footer/>
        </GlobalProvider>
    </BrowserRouter>
    )
}

export default AppRouter;
