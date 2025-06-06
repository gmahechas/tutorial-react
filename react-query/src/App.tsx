import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Contact from './Contact'
import User from "./User"

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
