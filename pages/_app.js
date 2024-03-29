import { Header } from '../components/Header';
import { ThemeContext } from '../helpers/ThemeContext';
import { useDarkMode } from '../helpers/useDarkMode';


//Styles
import { GlobalStyle } from '../styles/styledComponents/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/styledComponents/Themes';
import {ThemeProvider} from "styled-components";
import "../styles/css/prism-night-owl.css";
import '../styles/css/ToggleButton.css'
import "../styles/css/Header.css";
import "../styles/css/PostListItem.css";
import "../styles/css/default.css";
import Footer from '../components/Footer';

import { BodyDiv, GeneralDiv, BodyGen } from '../styles/styledComponents/Global'




function MyApp({ Component, pageProps }) {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return(
    <ThemeContext.Provider value={{theme, themeToggler}}>

      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <Header theme={theme} toggleTheme={themeToggler}/>
        <BodyGen>

          <GeneralDiv>
            <BodyDiv>
              <Component {...pageProps} />

            </BodyDiv>
          </GeneralDiv>
        </BodyGen>

        <Footer/>
      </ThemeProvider>

    </ThemeContext.Provider>
  )
}

export default MyApp
