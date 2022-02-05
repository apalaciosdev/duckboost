import React, { useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components';

import { ThemeContext } from '../helpers/ThemeContext';



const StyledImage = styled(Image)`
  border-radius: 10px;
  flex-grow:0;
  flex-shrink:0;
  width: 2%;
  `

const StyledH3 = styled.h3`
  width: 98%;
  padding-left: 10px;
  text-align: left;
  
`

const StyledDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  padding-rigth: 10px;
  padding-left: 10px;
  width: 99%;
  &:hover{
    background: ${props => props.theme === 'light' ? '#f0eeee' :  props => props.theme === 'dark' ? '#182026' : '#f0eeee'}
  } 
`



export const PostListItem = ({ title, date, languaje}) => {

  const {theme} = useContext(ThemeContext)

  return (
    <StyledDiv theme={theme}>      
      <StyledImage src={`/images/icons/${languaje}.png`} alt='Logo' width={40} height={40}/>
      <StyledH3> {title} </StyledH3>
    </StyledDiv>
  );
};
