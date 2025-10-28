import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
