import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/bruno-lucas-0b24212b/'>Linkedin</a>
          </li>
          <li>
            <a href='https://github.com/brunolsantos'>Github</a>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=Mf4Se4ZGcG8'>Tutorial created by Guilherme Rodz</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;