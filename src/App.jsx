import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HeroSection from "./components/hero";
import SkillsSection from "./components/skillsSection"; // Import the Skills Section
import Services from "./components/sevices"; // Import the Services Page
import PageWrapper from "./components/pagewrapper"; // GSAP Wrapper
import About from "./components/about";
import GetInTouch from "./components/GetInTouch";
import ProjectsSection from "./components/portfolio"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <Header />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HeroSection />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <ProjectsSection />
              </PageWrapper>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWrapper>
                <SkillsSection />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/getintouch"
            element={
              <PageWrapper>
                <GetInTouch />
              </PageWrapper>
            }
          />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
