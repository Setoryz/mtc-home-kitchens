import "./App.scss";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* HeroSection */}
      <Hero />
      {/* Discover Section */}
      <Discover />
      {/* Reviews Section */}
      <Reviews />
      {/* Gallery Section */}
      <Gallery />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
