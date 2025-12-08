import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <Cards />
        <main className="main-content">{/* Main content will go here */}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
