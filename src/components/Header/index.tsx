import React from 'react'
import { Container } from './style'
import { LogoStyle } from '../../styles/components/Icons'
import { ButtonStyle } from '../../styles/components/Button'

const Header = () => {
  return (
        <Container>
            <LogoStyle/>
            <ButtonStyle>Try it Free</ButtonStyle>
        </Container>
  )
}

export default Header
