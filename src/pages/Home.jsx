import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from '../components/Contact'
import Education from '../components/Education'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
