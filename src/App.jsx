import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';

/* Single-page landing: all sections stacked */
const LandingPage = () => (
  <>
    <HomePage />
    <AboutPage />
    <ExperiencePage />
    <SkillsPage />
    <ProjectsPage />
    <ContactPage />
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
