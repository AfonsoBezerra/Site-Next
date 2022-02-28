import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --pink: hsl(322, 100%, 66%);
        --pink-rgb: 255, 82, 191;           // rgb(255, 082, 191)
        --font-button-color: 245, 250, 255; // rgb(245, 250, 255)
        
    }
    #__next{
        width: 100%;
        height: 100%;
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        color: hsl(192, 100%, 9%);
    }
`
