import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav'
import Index from './components/Index'
import Projects from "./components/projects"

function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <Routes>
        <Route path="/" element={ <Index/> }/>
        <Route path="projects" element={ <Projects/> }/>
      </Routes>
    </div>
  )
}



export default App
