import { useState, useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
     <div className="min-h-screen bg-white dark:bg-[#242424] text-black dark:text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero/>
      <About/>
      <Education/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
