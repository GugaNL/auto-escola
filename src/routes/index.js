import { Routes, Route } from "react-router-dom"
//Component
import Home from "./home"
import About from "./about"
import ProductDetail from "./productDetail"
import Error404 from "./error404"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetail />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
