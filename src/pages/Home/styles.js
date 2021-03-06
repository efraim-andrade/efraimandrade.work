import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1650px) { padding: 20px 3%; }

  @media screen and (max-width: 1024px) {
    padding: 20px;

    justify-content: center;
  }

  > header {
    margin: 40px 0 60px;

    @media screen and (max-width: 1500px) { margin: 20px 0 30px; }

    @media screen and (max-width: 1024px) { margin: 0 0 20px; }
  }

  > section {
    width: 100%;

    display: grid;
    grid-gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (max-width: 1024px) { flex-direction: column; }

    > .message {
      display: none;

      @media screen and (max-width: 1024px) {
        display: block;
        margin-top: 20px;

        font-size: .7rem;
        text-align: center;

        > a {
          color: ${colors.string};
          text-decoration: underline;
        }
      }
    }
  }
`;
