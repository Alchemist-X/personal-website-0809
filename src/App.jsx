import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Publications from './components/Publications/Publications';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Publications />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
