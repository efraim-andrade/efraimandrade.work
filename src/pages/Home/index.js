import React from 'react';

import { Window, CoverLetter } from '../../components';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <section>
        <Window />

        <p className="message">
          Let’s work together?{' '}

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:efraim.dev@gmail.com"
          >
            send me a message!
          </a>
        </p>

        <CoverLetter />
      </section>
    </Container>
  );
}

export default Home;
