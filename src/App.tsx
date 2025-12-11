import './App.css'
import Header from '@/components/common/Header'
import { BrowserRouter, Routes, Route } from 'react-router'
import {
  MainPage,
  NotFound,
  JaeMinPage,
  JaeEunPage,
  HanbyeolPage,
} from './pages'
import { useCountStore } from './store/countStore'

function App() {
  const count = useCountStore((state) => state.count)
  const increase = useCountStore((state) => state.increase)
  const decrease = useCountStore((state) => state.decrease)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/JaeMin" element={<JaeMinPage />} />
        <Route path="/JaeEun" element={<JaeEunPage />} />
        <Route path="/HanByeol" element={<HanbyeolPage />} />
      </Routes>
      <div className="min-h-screen bg-white p-8">
        <Header />

        <div className="mt-10">
          <h2>Count: {count}</h2>
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-1</button>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
