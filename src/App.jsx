import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
