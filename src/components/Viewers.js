import React from 'react';
import Styled from 'styled-components';

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="disney"/>
        <video autoplay={true} loop={true} playsInline={true}>
         <source src="./videos/1564674844-disney.mp4"  type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-pixar.png" alt="disney"/>
        <video autoplay={true} loop={true} playsInline={true}>
         <source src="./videos/1564676714-pixar.mp4"  type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-marvel.png" alt="disney"/>
        <video autoplay={true} loop={true} playsInline={true}>
         <source src="./videos/1564676115-marvel.mp4"  type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-starwars.png" alt="disney"/>
        <video autoplay={true} loop={true} playsInline={true}>
         <source src="./videos/1608229455-star-wars.mp4"  type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-national.png" alt="disney"/>
        <video autoplay={true} loop={true} playsInline={true}>
         <source src="./videos/1564676296-national-geographic.mp4"  type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = Styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = Styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) Os;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover{
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers