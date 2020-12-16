import React from "react"
import { useParams } from "react-router-dom"
//Components
import ProductDetailPage from "../../components/pages/ProductDetail"
import Error404 from "../../components/pages/Error"
//Image
import EmptyService from "../../assets/svg/empty-service.svg"
//External Hooks
import { useScrollToTop } from "../../hooks/scroll"
import { useProduct } from "../../hooks/products"

const ProductDetail = () => {
  const { slang } = useParams()
  const product = useProduct({ slang })

  useScrollToTop()

  if (!product) {
    return (
      <Error404
        title="Serviço não encontrado"
        description="Não foi encontrado o serviço ou não está disponível"
        image={EmptyService}
      />
    )
  }

  return <ProductDetailPage product={product} />
}

export default ProductDetail
