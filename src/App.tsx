import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Achievements } from '@/components/Achievements';
import { Creative } from '@/components/Creative';
import { Education } from '@/components/Education';
import { ResumeContact } from '@/components/ResumeContact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Creative />
        <Education />
        <ResumeContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
