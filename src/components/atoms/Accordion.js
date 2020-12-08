import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { MdExpandMore, MdExpandLess } from "react-icons/md"

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${(props) => props.theme.colors.primary.main};
  background-color: #fff;

  ${(props) =>
    props.open &&
    css`
      margin: 16px 0;
    `}

  &:first-child {
    //Primeiro item filho
    margin-top: 0;
  }

  &:last-child {
    //Último item filho
    margin-bottom: 0;
  }
`

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;

  & h6 {
    margin: 0;
    flex: 1;
  }

  & svg {
    font-size: 1.25rem;
  }
`

const Body = styled.div`
  padding: 0 16px 16px 16px;
`

const Accordion = ({ title, children, open: propOpen, onChange }) => {
  //open foi renomeado para propOpen
  const [isOpen, setOpen] = useState(false)

  const isControlled = propOpen !== undefined

  const open = isControlled ? propOpen : isOpen

  const handleOpen = () => {
    if (isControlled) {
      onChange(!open)
    } else {
      setOpen(!open)
    }
  }

  return (
    <Root open={open}>
      <Head role="button" onClick={handleOpen}>
        <h6>{title}</h6>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  )
}

Accordion.defaultProps = {
  open: undefined,
  title: undefined,
  children: undefined,
  onChange: undefined,
}

Accordion.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
}

export default Accordion
