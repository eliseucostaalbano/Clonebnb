import Header from "./components/Header"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import { BrowserRouter, Routes, Route  } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
