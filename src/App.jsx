
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Tools from './pages/Tools'
import  Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
     {/* Header */}

    <Header/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tools' element={<Tools/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>

    <Footer/>
    </>

    
  )
}

export default App
