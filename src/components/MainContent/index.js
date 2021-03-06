import React from 'react';
import { Main } from './styles';

export default () => {
  return (

    <Main >
        <div className="main--content">
          <div className="title--content">
            <p>Helena Meyer</p>
            <p>Desenvolvedora Frontend</p>
          </div>

          <div className="list--content">
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Javascript</li>
              <li>API rest</li>
              <li>CSS 3</li>
              <li>Bootstrap</li>
              <li>HTML 5</li>
              <li>Web Developer</li>
            </ul>
          </div>

          <div className="portfolio--content">
            <a href="/">Acessar portfólio</a>
          </div>

          <div className="invite--projects">
            <p>ou role a página e veja meus últimos projetos</p>
          </div>
        </div>
      
    </ Main>

  )
}
