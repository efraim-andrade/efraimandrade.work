import React from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

function Header() {
  return (
    <Container>
      <img src={require('../assets/img/avatar.jpg')} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 200px;
    height: 200px;
    border-radius: 1000px;
    box-shadow: 0 0 20px rgba(189, 147, 249, .2);

    @media screen and (max-width: 1500px) {
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 1024px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export default Header;
