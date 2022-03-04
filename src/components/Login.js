import React from 'react';
import Styled from 'styled-components';
import Header from './Header';

const Login = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Cta>
          <CtaLogoOne src="./images/cta-logo-one.svg" alt="logo one" />
          <SignUp>Get all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional
            fee with a Disney+ subscription. As of 03/26/21, the price of
            Disney+ and The Disney Bundle will increase by $1.
          </Description>
          <CtaLogoTwo  src="./images/cta-logo-two.png" alt="logo two"/>
        </Cta>
        <BgImg />
      </Content>
    </Container>
  )
}

const Container = Styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = Styled.section`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImg =  Styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./images/login-background.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index : -1;
`;

const Cta =  Styled.div`
  max-width: 600px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 2vw;
  z-index: 1;
  transition-timing-function: ease-out;
  transition: opacity .2s;
  width: 100%;
`;

const CtaLogoOne =  Styled.img`
  margin-bottom: 12px;
  max-width: 580px;
  min-height: 1px;
  width: 100%;
  display: block;
`;

const SignUp = Styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background: #0063e5;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`;

const Description = Styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CtaLogoTwo = Styled.img`
  max-width: 580px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;