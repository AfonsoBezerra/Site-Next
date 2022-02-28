import styled, { css } from 'styled-components'

const AlignCenter = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Padding = css`
 padding: 1rem 10%;
 @media screen and (min-width: 540px){
    padding: 1rem 20%;
 }
 @media screen and (min-width:720px){
    padding: 1rem 15%;
 }
 @media screen and (min-width: 1024px){
     padding: 1rem 20%
 }
`

export const MainStyle = styled.main`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 4rem 0;
    gap: 2rem;
    overflow-x:hidden;
    
    .text_build{
        ${AlignCenter}
        ${Padding}
        gap: 1rem;
    }
    .mockup_image {
        ${Padding}
    }
    .infos{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7rem;

        @media screen and (min-width:1024px){
            flex-direction: row;
            justify-content: center;
            gap:12rem
        }
 
    }
    .together {
        > div {
            background-color: #F6FBFF;
            padding: 3rem 8%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            @media screen and (min-width:1024px){
            flex-direction: row-reverse;
            
            .text-together{
                flex-direction: column;
                text-align: start;
            }
        }
            @media screen and (min-width:1440px){
                gap: 20rem;
            }

            @media screen and (min-width:1920px){
                gap: 30rem;
            }
        }
    }
    .flowing{

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 7rem 7%;
        gap: 1rem;

        @media screen and (min-width:1024px){
            flex-direction: row;
            gap: 4rem;
            .flowing-text{
                flex-direction: column;
                text-align: start;
            }
        }

        @media screen and (min-width:1440px){
                gap: 20rem;
            }
            @media screen and (min-width:1920px){
                gap: 30rem;
            }
    }
    .users{
        >div{
            background-color: #F6FBFF;
            padding: 2rem 7% 5rem 7%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            
        @media screen and (min-width:1024px){
            flex-direction: row-reverse;
            .user-text{
                flex-direction: column;
                text-align: start;
            }
        }
        @media screen and (min-width:1440px){
                gap: 20rem;
            }
            @media screen and (min-width:1920px){
                gap: 30rem;
            }
        }
    }

    .text_ready{
        ${AlignCenter}
        ${Padding}
        gap: 2rem;
    }
  
`

export const FooterStyle = styled.footer`
    >div{
            display: flex;
            flex-wrap: wrap;
            background-color: #00252E;
            padding: 2rem 7% 2rem 4%;
            gap: 5rem;

            p{
                letter-spacing: 1px;
                padding: 1rem 1% 0 0;
                line-height: 1.4rem;
            }

            div {
                width: max-content;
            }

            @media screen and (min-width: 1024px){
                flex-wrap: unset;
                flex-direction: row-reverse;
                align-items: baseline;
                gap: 3rem;
                padding: 0 4%;
            }
        }

`
