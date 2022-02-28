import styled, { css } from 'styled-components'

interface buttonProps{
  fill?: string
}

export const ButtonStyle = styled.button`
  border: 1px solid rgb(var(--pink-rgb));
  color: var(--pink);
  font-size: 0.7rem;
  padding: .4rem 5%;
  background-color: transparent;
  border-radius: 100px;
  box-shadow: 0 0 10px rgba(var(--pink-rgb), 20%);
  width: fit-content;
  transition: .5s, outline 0s;
  cursor: pointer;
  @media screen and (min-width: 1440px){
      padding: .6rem 3%;  
    }
    @media screen and (min-width: 1920px){
      padding: .3rem 1.5%;  
    }

  ${(props: buttonProps) => props.fill && css`
    color: rgb(var(--font-button-color));
    background-color: var(--pink);
    border: none;  
    font-size: 0.8rem;
    padding: 0.8rem 14%;   
    box-shadow: 0 5px 5px rgba(0,0,0, 20%);
    font-weight: 600;
    :hover{
      box-shadow: 0 2px 2px rgba(0,0,0, 20%);
      transform: scale(0.95);
    }
    @media screen and (min-width: 1024px){
      padding: 1.2rem 8%;  
    }
    @media screen and (min-width: 1920px){
      padding: 1.2rem 5%;  
    }
  `}

  :hover{
    color: rgb(var(--font-button-color));
    background-color: var(--pink);
  }
  :active{
    outline: 3px solid rgba(var(--pink-rgb), 0.4);
  }

`

export const ButtonSubs = styled.button`
    color: rgb(var(--font-button-color));
    background-color: var(--pink);
    border: none;  
    font-size: 0.8rem;
    padding: 0.8rem 6%;   
    border-radius: 5px;
    font-weight: 600;
    transition: all .5s;
    cursor: pointer;
    :hover{

      color: var(--pink);
      background-color: white;
    }
`
