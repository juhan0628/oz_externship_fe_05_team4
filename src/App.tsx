import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import MainPage from './pages/MainPage'

import JaeMinPage from './pages/Jaemin/index'
import JaeEunPage from './pages/Jaeeun/index'
import HanByeolPage from './pages/Hanbyeol/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/JaeMin" element={<JaeMinPage />} />
        <Route path="/JaeEun" element={<JaeEunPage />} />
        <Route path="/HanByeol" element={<HanByeolPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
