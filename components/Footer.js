import Image from 'next/image'
import styled from 'styled-components';



const FooterDiv = styled.div`
  background-color: #202B33;
  margin-top: 80px;
  color: white;
  padding: 5px;
  border: 5px solid #202B33;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Developer = styled.p`
  width: 100%;
  text-align: center;
  font-size: 13px;
`

const DeveloperName = styled.a`
 &:hover{
    border-bottom: 1px solid white;
  }
`




const Footer = () => {

  return(
    <FooterDiv>
      <Image src={`/images/logo/logo-extended.png`} alt='Logo' width={200} height={70}/>
      {/* <Developer>Developed by <DeveloperName href="http://apalacios.dev" target="_blank" rel="noreferrer">apalacios.dev</DeveloperName></Developer> */}
    </FooterDiv>
  );
};

export default Footer;
