import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Thankyou from './pages/Thankyou'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route  path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route  path='/terms' element={<Terms />} />
        <Route  path='/thankyou' element={<Thankyou/>} />


      </Route>
    </Routes>
  )
}

export default App
