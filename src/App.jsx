import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import NoPage from "./pages/notFound";
import Form from "./pages/login"


//papper
import Papper from "./pages-papper/papper"
import Satu from "./pages-papper/1"
import Dua from "./pages-papper/2"


import './App.css'

function App() {
  

  return (
    <>
	<BrowserRouter>
      <Routes>
		  <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NoPage />} />
		  <Route path="/login" element={<Form />} />
		  
	
		  <Route path="/papper" element={<Papper />} />
		  <Route path="/papper/1" element={<Satu />} />
		  <Route path="/papper/2" element={<Dua />} />
      </Routes>
    </BrowserRouter>

    
	
	
    </>
  )
}

export default App
