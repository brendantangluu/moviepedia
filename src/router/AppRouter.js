import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageWatchList from "../pages/PageWatchList";
import PageSingle from "../pages/PageSingle";
import { GlobalProvider } from "../context/GlobalContext";
import Favourites from "../pages/PageFavourites";
import PageTest from "../pages/PageTest";
import PageSearch from "../pages/PageSearch";
import Headertest from "../components/Headertest";



function AppRouter(){
    return(
    <BrowserRouter>
        <GlobalProvider>
            <Headertest />
            <Routes>
                <Route path="/" element = {<PageHome/>} />
                <Route path="/single/:id/about" element = {<PageSingle/>}/>
                <Route path="/about" element = {<PageAbout/>}/>
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/watchlist" element={<PageWatchList />} />
                <Route path="/test" element={<PageTest />} />
                <Route path="/search" element={<PageSearch />} />
                <Route path='/headertest' element={<Headertest />} />
            </Routes>
            <Footer/>
        </GlobalProvider>
    </BrowserRouter>
    )
}

export default AppRouter;
