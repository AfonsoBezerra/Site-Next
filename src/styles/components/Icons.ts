import styled, { css } from 'styled-components'
import LogoIcon from '../../assets/logo.svg'
import IconCommunities from '../../assets/icon-communities.svg'
import IconMessages from '../../assets/icon-messages.svg'
import LogoFooter from '../../assets/logo-branco.svg'
import IconPhone from '../../assets/icon-phone.svg'
import IconEmail from '../../assets/icon-email.svg'

const flexInvertCSS = css`
  display: flex;
  justify-content: end;
`
export const LogoStyle = styled(LogoIcon)`
  zoom: .5;
  @media screen and (min-width: 1920px){
     zoom: 1;
    }
`
export const IconCommunitiesStyle = styled(IconCommunities)`
  ${flexInvertCSS}
  zoom: .8;
`
export const IconMessagesStyle = styled(IconMessages)`
  ${flexInvertCSS}
  zoom: .6;
`
export const LogoFooterStyle = styled(LogoFooter)`
  zoom: 0.8;
`
export const IconPhoneStyle = styled(IconPhone)`
  zoom: 1;
`
export const IconEmailStyle = styled(IconEmail)`
  zoom: 1;
`
