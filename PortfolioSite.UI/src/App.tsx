
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <Navbar />
      
      <main id="home">
        <Hero />
        <Experience />
        <Projects />
      </main>

      <footer className="container section flex items-center justify-center flex-col gap-4">
        <div style={{ height: '1px', width: '100%', background: 'var(--card-border)', marginBottom: '2rem' }} />
        <p>© {new Date().getFullYear()} Narendra Chigili. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
