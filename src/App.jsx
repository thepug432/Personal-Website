import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav'
import Index from './components/Index'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Index/> }/>
      </Routes>
    </div>
  )
}



export default App
