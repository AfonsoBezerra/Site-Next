import styled from 'styled-components'
import ScreenMockups from '../../assets/screen-mockups.svg'
import GrowTogether from '../../assets/illustration-grow-together.svg'
import Flowing from '../../assets/illustration-flowing-conversation.svg'
import Users from '../../assets/illustration-your-users.svg'

export const ScreenMockupsStyle = styled(ScreenMockups)`
  zoom: 0.3;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 280px){
    zoom: 0.2;
  }
  @media screen and (min-width: 412px){
    zoom: 0.33;
  }
  @media screen and (min-width:720px){
    zoom:0.55;
  }
  @media screen and (min-width:820px){
    zoom:0.6;
  }
  @media screen and (min-width:1024px){
    zoom:0.62;
  }
  @media screen and (min-width:1440px){
    zoom:.85
  }
  @media screen and (min-width:1920px){
    zoom:1.15
  }
  @media screen and (min-width:2560px){
    zoom:1.54
  }
`
export const GrowTogetherStyle = styled(GrowTogether)`
  zoom:0.3;
  @media screen and (max-width: 280px){
    zoom: 0.2;
  }
  @media screen and (min-width:1024px){
    zoom:0.3;
  }
  @media screen and (min-width:1440px){
    zoom:0.35;
  }
  @media screen and (min-width:1920px){
    zoom:0.5;
  }
`
export const FlowingStyle = styled(Flowing)`
  zoom:0.26;
  @media screen and (max-width: 280px){
    zoom: 0.2;
  }
  @media screen and (min-width:1024px){
    zoom:0.3;
  }
  @media screen and (min-width:1440px){
    zoom:0.35;
  }
  @media screen and (min-width:1920px){
    zoom:0.5;
  }
`
export const UsersStyle = styled(Users)`
  zoom:0.3;
  @media screen and (max-width: 280px){
    zoom: 0.2;
  }
  @media screen and (min-width:1024px){
    zoom:0.3;
  }
  @media screen and (min-width:1440px){
    zoom:0.35;
  }
  @media screen and (min-width:1920px){
    zoom:0.5;
  }
`
