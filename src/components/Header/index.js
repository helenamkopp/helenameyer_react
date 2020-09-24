import React from 'react';
import { Header, HeaderLogo, HeaderLinks } from './styles';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';



export default () => {
  return (
    < Header >
      < HeaderLogo>
        <a href="/">
          <h1>Helena Meyer</h1>
        </a>
      </ HeaderLogo>
      < HeaderLinks>
          <a className="about" href="/">Sobre</a>
          <a className="portfolio" href="/">Portfólio</a>
          <a className="artigos" href="/">Artigos</a>
          <a className="artigos" href="/">Contato</a>
          <a className="linkedin" href="/">
            <img src={Linkedin} alt="Linkedin"/>
          </a>
          <a className="github" href="/"> 
            <img src={Github} alt="Github"/>
          </a>
      </HeaderLinks>
    </ Header>
  )
}