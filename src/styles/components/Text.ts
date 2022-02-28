import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  @media screen and (min-width: 1440px){
    font-size: 2rem;
  }
`

export const Paragraph = styled.p`
  font-size: 0.9rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  &.TextTogether{
    padding: 1rem 0rem;
    text-align: center;
  } 
    @media screen and (min-width:1024px){
      &.build-paragraph{
      padding: 0 5rem;
      @media screen and (min-width:1440px){
          width:35rem;
          padding: 1rem 0 0 0;
          font-size: 1.1rem;
        }
      }
      &.TextTogether{
        padding: 1rem 2.5rem 0 0;
        width: 30rem;
        text-align: left;
        @media screen and (min-width:1440px){
          width:35rem;
          padding: 1rem 0 0 0;
          font-size: 1.1rem;
        }
       }
       &.Textflowing{
        padding: 1rem 1rem 0 0;
        width: 30rem;
        text-align: left;
        @media screen and (min-width:1440px){
          width:35rem;
          padding: 1rem 0 0 0;
          font-size: 1.1rem;
        }
       }
       &.UserText{
        padding: 1rem 2.5rem 0 0;
        width: 30rem;
        text-align: left;
        @media screen and (min-width:1440px){
          width:35rem;
          padding: 1rem 0 0 0;
          font-size: 1.1rem;
        }
       }

    }
`
