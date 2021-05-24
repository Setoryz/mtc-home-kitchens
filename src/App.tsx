import "./App.scss";
import Discover from "./components/Discover";
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
      <h1>Test scroll</h1>
    </div>
  );
}

export default App;
