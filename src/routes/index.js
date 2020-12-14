import { Routes, Route } from "react-router-dom"
//Component
import Home from "./home"
import About from "./about"
import ProductDetail from "./productDetail"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos" element={<ProductDetail />} />
  </Routes>
)

export default AppRoutes
