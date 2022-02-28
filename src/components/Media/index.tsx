import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

import { Container } from './style'

const Media = () => {
  return (
        <Container>
        <FaFacebookSquare style={{ color: '#FFFFFF', zoom: 1.6 }} />
        <FaInstagram style={{ color: '#FFFFFF', zoom: 1.6 }}/>
        <FaTwitterSquare style={{ color: '#FFFFFF', zoom: 1.6 }} />
        </Container>
  )
}

export default Media
