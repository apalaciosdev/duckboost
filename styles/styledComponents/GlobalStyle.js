import { createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    padding: 0;
    margin: 10px;
    margin-top: 40px;
    font-family: Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p{
    width: 100%;
    line-height : 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h2{
    margin-top: 80px;
    margin-bottom: 20px;
    padding: 16px 20px;
    border-left: 6px solid #137CBD;

  }
 
`