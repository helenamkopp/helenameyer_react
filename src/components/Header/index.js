import React from 'react';
import { Header, HeaderLogo, HeaderLinks } from './styles';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';



export default ({ black }) => {
  return (
    < Header className={black ? 'black' : ''}>
      < HeaderLogo>
        <a href="/">
          <h1>Helena Meyer</h1>
        </a>
      </ HeaderLogo>
      < HeaderLinks>
          <a href="/">Sobre</a>
          <a href="/">Portfólio</a>
          <a className="linkedin" href="/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a className="github" href="/">
            <img src={Github} alt="Linkedin" />
          </a>
      </HeaderLinks>
    </ Header>
  )
}