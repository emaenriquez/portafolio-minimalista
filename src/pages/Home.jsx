import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectsPreview from '../components/ProjectsPreview';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <ProjectsPreview />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
