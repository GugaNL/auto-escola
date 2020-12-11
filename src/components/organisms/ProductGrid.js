import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
//Components
import Grid from "../atoms/Grid"
import Card, { CardBody, CardMedia } from "../molecules/Card"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"
//Theme
import ThemeProvider from "../../styles/ThemeProvider"

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false)
  let filteredProducts = showAll ? products : products.slice(0, 3)
  return (
    <>
      <ThemeProvider>
        <Grid md={3}>
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardMedia image={product.media} />
              <CardBody>
                <Heading>
                  <h6>{product.title}</h6>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button
                    variant="link"
                    color="primary"
                    as={Link}
                    to="/servicos"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </Grid>
        {!showAll && (
          <Toolbar>
            <Button variant="outlined" onClick={() => setShowAll(true)}>
              Lista completa de serviços
            </Button>
          </Toolbar>
        )}
      </ThemeProvider>
    </>
  )
}

ProductGrid.defaultProps = {
  products: [],
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
}

export default ProductGrid
