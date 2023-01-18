import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-background:rgb(42, 72, 88);
    --color-light: #fff;
    --color-dark: #000;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font-family: 'Karla', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }

`;
