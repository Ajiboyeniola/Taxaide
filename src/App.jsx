import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bussiness } from "./pages/bussiness";
import Individual from "./pages/individual";
import Navbar from "./components/Navbar";
import NoPage from "./pages/noPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index path="/" element={<Individual />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/business" element={<Bussiness />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
