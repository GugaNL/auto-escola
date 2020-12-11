import React from "react"
import GlobalStyle from "./styles/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ThemeProvider from "./styles/ThemeProvider"
//Component
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import ProductDetail from "./components/pages/ProductDetail"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
