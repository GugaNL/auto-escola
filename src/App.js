import React from "react"
import GlobalStyle from "./styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom"
import ThemeProvider from "./styles/ThemeProvider"
//Component
//Route
import Routes from "./routes"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
