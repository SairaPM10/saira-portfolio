import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import floral from './assets/floral-bg.jpg';

function App() {
  return (
    <div>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${floral})` }}
      >
        <div className="bg-white/70 min-h-screen">
          <Navbar />
          <Intro />
          <Work />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
