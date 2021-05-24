import "./App.scss";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* HeroSection */}
      <Hero />
      {/* Discover Section */}
      <Discover />
      <h1>Test scroll</h1>
    </div>
  );
}

export default App;
