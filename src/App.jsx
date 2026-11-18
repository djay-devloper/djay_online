import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import { portfolioData } from "./data/portfolioData.js";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper">
      <Navbar data={portfolioData.navigation} resumeUrl={portfolioData.hero.resumeUrl} />
      <main>
        <Hero data={portfolioData.hero} ui={portfolioData.ui} />
        <Experience
          data={portfolioData.experience}
          heading={portfolioData.sectionHeadings.experience}
          ui={portfolioData.ui}
        />
        <Projects
          data={portfolioData.projects}
          heading={portfolioData.sectionHeadings.projects}
          ui={portfolioData.ui}
        />
        <Skills data={portfolioData.skills} heading={portfolioData.sectionHeadings.skills} />
        <Education data={portfolioData.education} heading={portfolioData.sectionHeadings.education} />
        <Contact
          data={portfolioData.contact}
          heading={portfolioData.sectionHeadings.contact}
          ui={portfolioData.ui}
          socials={portfolioData.hero.links}
        />
      </main>
      <footer className="border-t border-line">
        <div className="page-shell flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{portfolioData.footer.attribution}</span>
          <span className="font-mono">© {new Date().getFullYear()} · {portfolioData.footer.builtWith}</span>
        </div>
      </footer>
    </div>
  );
}
