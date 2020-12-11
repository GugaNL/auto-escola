import React from "react"
//import PropTypes from "prop-types"
import styled from "styled-components"
import { FaHome, FaScroll, FaIdCard } from "react-icons/fa"
//Components
import MainHeader from "../molecules/MainHeader"
import Heading from "../atoms/Heading"
import Section from "../molecules/Section"
import Footer from "../organisms/Footer"
import Button from "../atoms/Button"
import Callout, {
  CalloutBody,
  CalloutButton,
  CalloutMedia,
} from "../atoms/Callout"
import BreadCrumb from "../atoms/BreadCrumb"
//External Hooks
import { useScrollToTop } from "../../hooks/scroll"
//Images
import Porsche from "../../assets/porsche.jpg"
import Direction from "../../assets/svg/direction.svg"

const DocList = styled.ul`
  list-style: none;
  padding: 0;
`

const DocItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`

const ProductDetail = () => {
  useScrollToTop()
  return (
    <>
      <MainHeader image={Porsche}>
        <Heading>
          <h1>Nome do serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços", link: "" },
            { label: "Nome do Serviço", link: "" },
          ]}
        />
      </MainHeader>
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dicta doloribus tempore, esse, neque velit rerum quisquam voluptate
          ratione, voluptatum ad? Possimus molestiae saepe molestias obcaecati
          vero soluta quidem odit!
        </p>
        <p>
          Nisi dolorum cupiditate quas architecto harum nam illo fuga fugiat, et
          ullam quod labore aliquid itaque illum rem modi minus, voluptate quos
          necessitatibus recusandae corrupti? Tempore obcaecati quia architecto
          quidem.
        </p>
        <p>
          Rem asperiores ea exercitationem, id voluptatum, cum libero minima
          maxime repudiandae recusandae dicta vel ullam ab nostrum aperiam ipsum
          qui? Amet dolorum necessitatibus voluptatem a ex? Non obcaecati
          excepturi fugit!
        </p>
        <h5>Documentos necessários:</h5>
        <DocList>
          <DocItem>
            <FaIdCard />
            RG
          </DocItem>
          <DocItem>
            <FaIdCard />
            CPF
          </DocItem>
          <DocItem>
            <FaScroll />
            CNH
          </DocItem>
          <DocItem>
            <FaHome />
            Comprovante de residência
          </DocItem>
        </DocList>
      </Section>
      <Section>
        <Callout>
          <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              distinctio, ratione suscipit voluptas vero non perferendis! Illo
              beatae distinctio voluptatibus facilis hic rerum commodi, quod
              fugiat eum nulla eligendi nesciunt!
            </p>
            <CalloutButton>
              <Button color="primary">Matricular</Button>
            </CalloutButton>
          </CalloutBody>
          <CalloutMedia image={Direction} />
        </Callout>
      </Section>
      <Footer />
    </>
  )
}

//ProductDetail.defaultProps = {}

//ProductDetail.propTypes = {}

export default ProductDetail
