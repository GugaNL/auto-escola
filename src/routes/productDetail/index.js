import React from "react"
import { useParams } from "react-router-dom"
//Components
import ProductDetailPage from "../../components/pages/ProductDetail"
//External Hooks
import { useScrollToTop } from "../../hooks/scroll"
import { useProduct } from "../../hooks/products"

const ProductDetail = () => {
  const { slang } = useParams()
  const product = useProduct({ slang })
  useScrollToTop()
  return <ProductDetailPage product={product} />
}

export default ProductDetail
