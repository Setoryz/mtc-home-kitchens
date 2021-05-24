import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* HeroSection */}
      <Hero />
      <h1>Text scroll</h1>
    </div>
  );
}

export default App;
