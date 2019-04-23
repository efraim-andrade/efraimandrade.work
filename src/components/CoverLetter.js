import React from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

function CoverLetter() {
  return (
    <Container>
      <p className="block">
        I’m an experienced front end and mobile developer who is true to the design and search for the perfection of the project.
      </p>

      <p className="block">
        I have been working almost two years as a front end developer creating the most diverse types of solutions and visual representations of my client’s companies in the agency that I work for and in the weekends for the Fabrica de Software in the same position.
      </p>

      <p className="block">
        Education wise, I have a technical degree and I’m in the last year of the superior course of analysis and system development.
      </p>

      <p className="block">
        I always seek to take the best experience that the user can have along, with the best visual and performance as possible using Javascript as the programming language with ReactJS or VueJS for web projects and React Native for mobile projects.
      </p>

      <p className="block message">
        Let’s work together?{' '}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:efraim.dev@gmail.com"
        >
          send me a message!
        </a>
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 700px;

  @media screen and (max-width: 1024px) { display: none; }

  > .block {
    margin-bottom: 1.5rem;

    color: #E5E5E5;
    line-height: 1.6;
    font-size: 1.2rem;

    @media screen and (max-width: 1500px) { font-size: .9rem; }

    &:last-child { margin-bottom: 0; }

    &.message { text-align: center; }

    > a {
      color: ${colors.string};
      text-decoration: underline;
    }
  }
`;

export default CoverLetter;
