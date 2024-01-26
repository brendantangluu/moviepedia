import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageFavourites from "../pages/PageFavourites";
import { GlobalProvider } from "../context/GlobalContext";

function AppRouter(){
    return(
      <BrowserRouter>
        <GlobalProvider>
          <Header/>
          <Routes>
              <Route path="/" element = {<PageHome/>} />
              <Route path="/workshop" element = {<WorkShop/>}/>
              <Route path='/favourites' element = {<PageFavourites/> } />
          </Routes>
          <Footer/>
        </GlobalProvider>
    </BrowserRouter>
    )
}

export default AppRouter;
