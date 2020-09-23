import styled from 'styled-components';


export const Header = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: transparent;
  transition: all ease 0.3s;

  .black {
    background-color: #141414;
  }
`;

export const HeaderLogo = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  
  a {
    text-decoration: none;
    color: #333333;
  }

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 35px;
  }
`;

export const HeaderLinks = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;

  a {
    padding: 10px;
    background-color: transparent;
    border-radius: 2px;
    text-decoration: none;
    margin-left: 10px;
    color: #333333;
    transition: all ease 0.3s;
  }

  a:hover {
    background-color: black;
    color: #e8e8e8;
  }

  a.linkedin,
  a.github {
    background-color: transparent;
  }

  a.linkedin {
    margin-left: 50px;
  }

  img {
    height: 30px;
    width: 30px;
    border-radius: 4px;
  }
`

// Paleta ,
//  Azul escuro #07172d
// Azul claro #b2c9fd
//  Amarelo queimado #dd9a25