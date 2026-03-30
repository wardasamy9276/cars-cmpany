import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Navbar from "./page/navbar/Navbar";

import "./App.css";
import { Footer } from "./page/footer/Footer";
import Services from "./page/services/Services";
import About from "./page/about/About";
import LoginPage from "./components/LoginPage";
import PaymentForm from "./components/PaymentForm";
import OurJourney from "./components/OurJourney";
import ServicesPage from "./components/ServicesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <section id="center">
        <div>
          <Routes>
            <Route path="/cars-cmpany/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/ourjourney" element={<OurJourney />} />
            <Route path="/servicespage" element={<ServicesPage />} />

            {/* ServicesPage.tsx */}
          </Routes>
        </div>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
