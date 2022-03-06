import React, { useEffect } from 'react';
import Styled from 'styled-components';
import Recommend from '../Recommend';
import Header from './Header';
import ImgSlider from './ImgSlider';
import NewDisNey from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import Viewers from './Viewers';
// import { useDispatch, useSelector } from 'react-redux';
// import db from '../firebase';
// import { setMovies } from '../features/movie/movieSlice';
// import { selectUserName } from '../features/user/userSlice';

const Home = () => {
  // const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);
  // let recommends = [];
  // let newDisneys = [];
  // let originals = [];
  // let trending = [];

  // useEffect(() => {
  //   db.collection('movies').onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       switch(doc.data().type) {
  //         case 'recommend':
  //           recommends = [...recommends, {id: doc.id, ...doc.data()}]
  //           break;
  //         case 'new':
  //           newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
  //           break;
  //         case 'original':
  //           originals = [...originals, {id: doc.id, ...doc.data()}]
  //           break;
  //         case 'trending':
  //           trending = [...trending, {id: doc.id, ...doc.data()}]
  //           break;
  //       }
  //     });
  //   });

  //   dispatch(
  //     setMovies({
  //       recommend: recommends,
  //       newDisney: newDisneys,
  //       original: originals,
  //       trending: trending,
  //     })
  //   )
  // }, [userName]);

  return (
    <>
      <Header />
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommend />
        <NewDisNey />
        <Originals />
        <Trending/>
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