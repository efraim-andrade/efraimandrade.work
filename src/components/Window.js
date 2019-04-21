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
            <Code color={colors.component}>Developer</Code>
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
            <Code color={colors.component}>Contact</Code>
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
  width: 680px;
  padding: 15px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  background: ${colors.primary};

  > header {
    display: flex;
    margin-bottom: 34px;

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
      margin-bottom: 40px;
      padding: 0 39px;

      &:last-child { margin: 0; }
    }
  }
`;

const Dots = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;

  background: ${props => props.color};
`;

const Block = styled.div`
  margin-bottom: 10px;
  padding-left: ${props => (props.tabs ? '48px' : 0)};

  display: block;
`;

const Code = styled.span`
  font-size: 28px;
  font-family: FiraCode;
  color: ${props => props.color};

  > a {
    position: relative;

    &:after {
      position: absolute;
      left: 0;
      bottom: 5px;

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
