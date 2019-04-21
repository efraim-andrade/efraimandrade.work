import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 9.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }

  > header {

  }

  > section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
