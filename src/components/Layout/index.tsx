import React from 'react'
import { MainStyle, FooterStyle } from './style'
import Header from '../Header'
import { Paragraph, Title } from '../../styles/components/Text'
import InputSubs from '../Input'
import Contact from '../Contacts'
import Media from '../Media'
import { IconEmailStyle, IconPhoneStyle, LogoFooterStyle } from '../../styles/components/Icons'

const Layout: React.FC = ({ children }) => {
  return (
        <>
            <Header></Header>
            <MainStyle>{children}</MainStyle>
            <FooterStyle>
                <img src='/bg-footer-top-mobile.svg'
                style={{ width: '100%', transform: 'translateY(7px)' }}/>
                <div>
                <div>
                <Title style={{ marginTop: '2rem', color: 'white' }}>NEWSLETTER</Title>
                <Paragraph style={{ color: 'white', fontSize: '0.8rem' }}>
                To recieve tips on how to grow your community, sign up to your
                weekly newsletter. We'll never send you spam or pass on your email
                email adress
                </Paragraph>
                <InputSubs/>
                </div>
                <div>
                <LogoFooterStyle/>
                <Paragraph style={{ color: 'white', fontSize: '0.8rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, Mauris nulla
                quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </Paragraph>
                <Contact icons={<IconPhoneStyle />}> Phone: +1-543-123-4567</Contact>
                <Contact icons={<IconEmailStyle />}>exemple@company.com</Contact>
                <Media />
                </div>
                </div>
            </FooterStyle>
        </>
  )
}

export default Layout
