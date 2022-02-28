import React, { ReactElement } from 'react'
import { Container } from './style'

interface props{
    icons: ReactElement<any, any>,
}

const Contact: React.FC<props> = ({ children, icons }) => {
  return (
        <Container>
        {icons}
        <span style={{ color: '#FFFF', fontSize: '0.8rem' }}>{children}</span>
        </Container>
  )
}

export default Contact
