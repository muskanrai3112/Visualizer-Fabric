import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUS";
import Header from "./component/Header/Header";
import Faq from "./pages/faq/Faq";
import ContactUs from "./pages/contactUs/ContactUs";
import Service from "./pages/service/Service";
import PravicyPolicy from "./pages/pravicypolicy/PravicyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/pravicyPolicy" element={<PravicyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
