import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Paragraph, Title } from '../../styles/components/Text'
import { Container } from './style'

interface props{
    data: number,
    icon: ReactElement<any, any>,
    description: string,
    timer: number
}

const Infos: React.FC<props> = ({ children, description, icon, data, timer }) => {
  const [counter, setCounter] = useState(0)
  const [aos, setAos] = useState(false)
  const infoContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (infoContainer.current?.classList.contains('aos-animate')) {
        setAos(true)
      } else {
        setAos(false)
      }
    })
  }, [])

  useEffect(() => {
    if (aos) {
      if (counter < data) {
        setTimeout(() => {
          setCounter((lastNumber) => lastNumber + 1)
        }, timer)
      }
    }
  })

  const total = counter / 10
  return (
        <Container data-aos='zoom-in' ref={infoContainer}>
            {icon}
            <Title style={{ fontSize: '4rem' }}>{total}{children}</Title>
            <Paragraph style={{ opacity: 0.7, fontSize: '0.9rem' }}>{description}</Paragraph>
        </Container>
  )
}

export default Infos
