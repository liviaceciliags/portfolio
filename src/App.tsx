import Navbar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import About from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import Projects from "./pages/Home/sections/Projects/Projects"
import Experience from "./pages/Home/sections/Experience/Experience"
import Skills from "./pages/Home/sections/Skills/Skills"
import Pillar from "./pages/Home/sections/Pillar/Pillar"
//import Projects from "./pages/Home/sections/Projects/Projects"

const App: React.FC = () => { //mais fácil de usar o typeScript com arrow function

  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Projects />
      <Pillar/>
      <Footer/>
    </>
  )
}

export default App
