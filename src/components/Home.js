import React from 'react';
import Styled from 'styled-components';
import Recommend from '../Recommend';
import Header from './Header';
import ImgSlider from './ImgSlider';
import NewDisNey from './NewDisney';
import Viewers from './Viewers';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommend />
        <NewDisNey />
      </Container>
    </>
  );
}

const Container = Styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  
  &:after {
    background: url('./images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;