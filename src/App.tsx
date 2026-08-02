
import Home  from './pages/Home';
import  AgeVerification from './components/layout/AgeVerification'
import Portal from './pages/Portal';
import Producto from "./pages/Producto";
import Contacto from './pages/Contacto';
import Tienda from './pages/Tienda';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
function App() {
  return (
    <>

      <ScrollToTop />
      
      <AgeVerification />

         <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:slug" element={<Producto />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contacto" element={<Contacto />} />
         <Route
          path="/terminos"
          element={<Terminos />}
        />

        <Route
          path="/privacidad"
          element={<Privacidad />}
        />
      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;