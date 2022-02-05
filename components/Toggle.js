import React, { useContext } from 'react'

import { ThemeContext } from '../helpers/ThemeContext';


const Toggle = ({theme,  toggleTheme }) => {
  const {themeToggler} = useContext(ThemeContext)

    return (
      <div className = 'toggle-switch'>
        <label>
          <input type = 'checkbox' onClick={themeToggler} defaultChecked={theme === "light" ? false : true}/>
          <span className = 'slider'></span>
        </label>
      </div>
    );
};

export default Toggle;