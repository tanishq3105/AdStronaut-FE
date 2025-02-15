
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
