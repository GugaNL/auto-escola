import React from "react"
import GlobalStyle from "./styles/GlobalStyle"
import MainHeader from "./components/molecules/MainHeader"
import Heading from "./components/atoms/Heading"
import Button from "./components/atoms/Button"
import Porsche from "./assets/porsche.jpg"
import Grid from "./components/atoms/Grid"
import Feature from "./components/atoms/Feature"
import { FaCar, FaKey, FaMapMarkerAlt, FaAccessibleIcon } from "react-icons/fa"
import ThemeProvider from "./styles/ThemeProvider"

import Home from "./components/pages/Home"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
