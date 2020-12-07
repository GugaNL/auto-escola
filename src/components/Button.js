import React from "react"

//Style
import styled from "styled-components"

//Types
import PropTypes from "prop-types"

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main
    case ButtonColors.danger:
      return theme.colors.danger.main
    default:
      return "#e0e0e0"
  }
}

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark
    case ButtonColors.danger:
      return theme.colors.danger.dark
    default:
      return "#5a6268"
  }
}

const getColorText = (props) => props.theme.colors.primary.text

const getLinkText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575"
  }

  return getMainColor(props)
}

const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
}

const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
}

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getMainColor};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`

const ButtonLinked = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`

const ButtonWrapper = (props) => {
  //Necessário criar pois o componente Button é um styled-component, então o storybook não reconhece o props dele
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />
    case ButtonsVariants.link:
      return <ButtonLinked {...props} />
    default:
      return <Button {...props} />
  }
}

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
}

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)), //Como sempre serão 3 valores fixos então pode-se usar um enum ao invés de string
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
}

export default ButtonWrapper
