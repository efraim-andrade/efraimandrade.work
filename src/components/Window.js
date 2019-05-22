import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '../constants';

function Window() {
  return (
    <Container>
      <header>
        <Dots color={colors.danger} />
        <Dots color={colors.warning} />
        <Dots color={colors.success} />
      </header>

      <div className="index">
        <div className="component">
          <Block>
            <Code>{'<'}</Code>
            <Code color={colors.component} italic>Developer</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>name</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.string}>"Efraim Andrade"</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>role</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.string}>"Web and Mobile Front End"</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>cleanCode</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.component}>{'{'}</Code>

            <Code color={colors.boolean}>true</Code>

            <Code color={colors.component}>{'}'}</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>interest</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.string}>"Design UI/UX"</Code>
          </Block>

          <Block>
            <Code color={colors.white}>/></Code>
          </Block>
        </div>

        <div className="component">
          <Block>
            <Code>{'<'}</Code>
            <Code color={colors.component} italic>Contact</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>github</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.component}>{'{'}</Code>

            <Code color={colors.white}>
              <a
                href="https://github.com/efraim-andrade"
                target="_blank"
                rel="noopener noreferrer"
              >
                efraim-andrade
              </a>
            </Code>

            <Code color={colors.component}>{'}'}</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>linkedin</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.component}>{'{'}</Code>

            <Code color={colors.white}>
              <a
                href="https://www.linkedin.com/in/efraim-andrade-morais-junior-517b0a149/"
                target="_blank"
                rel="noopener noreferrer"
              >
                links.linkedin
              </a>
            </Code>

            <Code color={colors.component}>{'}'}</Code>
          </Block>

          <Block tabs>
            <Code color={colors.attribute}>mail</Code>

            <Code color={colors.equal}>=</Code>

            <Code color={colors.string}>
              <a
                href="mailto:efraim.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                "efraim.dev@gmail.com"
              </a>
            </Code>
          </Block>

          <Block>
            <Code color={colors.white}>/></Code>
            <Code color={colors.white}>
              <span className="blinking">|</span>
            </Code>
          </Block>
        </div>
      </div>
    </Container>
  );
}

const blinking = keyframes`
  0% { opacity: .1; }
  50% { opacity: 1; }
  100% { opacity: .1; }
`;

const Container = styled.div`
  width: 100%;
  padding: 15px;
  max-width: 700px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  background: ${colors.primary};

  > header {
    display: flex;
    margin-bottom: 34px;

    @media screen and (max-width: 1500px) { margin-bottom: 24px; }

    @media screen and (max-width: 1024px) { margin-bottom: 20px; }

    > div {
      margin-right: 10px;

      &:last-child { margin: 0; }
    }
  }

  .index {
    flex: 1;
    display: flex;
    flex-direction: column;

    > .component {
      padding: 0 39px;
      margin-bottom: 40px;

      @media screen and (max-width: 1500px) { margin-bottom: 20px; }

      @media screen and (max-width: 1024px) {
        padding: 5px;
        margin-bottom: 10px;
      }

      @media screen and (max-width: 320px) {
        padding: 5px;
        margin-bottom: 0;
      }

      &:last-child { margin: 0; }
    }
  }
`;

const Dots = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;

  background: ${props => props.color};

  @media screen and (max-width: 1500px) {
    width: 14px;
    height: 14px;
  }

  @media screen and (max-width: 1024px) {
    width: 12px;
    height: 12px;
  }

  @media screen and (max-width: 320px) {
    width: 10px;
    height: 10px;
  }
`;

const Block = styled.div`
  margin-bottom: 10px;
  padding-left: ${props => (props.tabs ? '48px' : 0)};

  display: block;

  @media screen and (max-width: 1500px) {
    padding-left: ${props => (props.tabs ? '38px' : 0)};
  }

  @media screen and (max-width: 1024px) {
    padding-left: ${props => (props.tabs ? '28px' : 0)};
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 0;
    padding-left: ${props => (props.tabs ? '16px' : 0)};
  }
`;

const Code = styled.span`
  font-size: 24px;
  font-family: FiraCode;
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  color: ${props => props.color};

  @media screen and (max-width: 1500px) { font-size: 1rem; }

  @media screen and (max-width: 1024px) { font-size: .875rem; }

  @media screen and (max-width: 320px) { font-size: .75rem; }

  > a {
    position: relative;

    &:after {
      position: absolute;
      left: 0;
      bottom: 2px;

      width: 0;
      height: 2px;

      display: block;

      content: "";
      transition: .3s;
      background: ${props => props.color};
    }

    &:hover {
      &:after { width: 100%; }
    }
  }

  > .blinking { animation: 1.5s ${blinking} linear infinite; }
`;


export default Window;
