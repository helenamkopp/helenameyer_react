import React from 'react';
import { Section } from './styles';

export default () => {
  return (
    <Section>
      <div className="content">
        <div className="presentation">
          <div className="name"> HELENA MEYER </div>
          <div className="name"> DESENVOLVEDORA FRONTEND </div>
        </div>

        <div className="knowledges">
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Javascript</li>
            <li>API rest</li>
            <li>Bootstrap</li>
            <li>Styled-Components</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Web developer</li>
          </ul>
        </div>
        <a href="/">Veja meu portfólio de projetos</a>
      </div>
    </Section>
  )
}