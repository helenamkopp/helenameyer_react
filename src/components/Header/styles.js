import styled from 'styled-components';


export const Header = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
  width: 100%;
  height: 70px;
  z-index: 999; 
  top: 0;
  left: 0;
  right: 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #e57964;
 
`
export const HeaderLogo = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;

  a {
    color: black;
  }
`

export const HeaderLinks = styled.div `


a{
  padding: 4px;
  margin-left: 10px;
  font-size: 25px;
  color: black;
  font-family: 'Lato', sans-serif;
}

a.linkedin {
  margin-left: 90px;
}

a:hover {
  background-color:#f0b2a6;
  border-radius: 10px;
}

img {
  height: 25px;
  width: 25px;
  border-radius: 4px;
  align-items: center;
}

a.linkedin:hover, 
a.github:hover {
  background-color: transparent;
}
 
`

// Paleta ,
//  Azul escuro #07172d
// Azul claro #b2c9fd
//  Amarelo queimado #dd9a25