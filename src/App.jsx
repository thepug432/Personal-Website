import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav'
import Index from './components/Index'
import Projects from "./components/projects"
import Resume from './components/resume'

function App() {
  return (
    <div className="bg-red-500">
      <Nav/>
      <Routes>
        <Route path="/" element={ <Index/> }/>
        <Route path="projects" element={ <Projects/> }/>
        <Route path="resume" element={ <Resume/> }/>
      </Routes>
    </div>
  )
}



export default App
