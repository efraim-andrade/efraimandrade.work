import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1500px) { padding: 0 3%; }

  @media screen and (max-width: 1024px) { padding: 0 20px; }

  > header {

  }

  > section {
    width: 100%;

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      flex-direction: column;

      > .message {
        margin-top: 20px;

        font-size: .85rem;
        text-align: center;

        > a {
          color: ${colors.string};
          text-decoration: underline;
        }
      }
    }

    > .message { display: none; }
  }
`;
