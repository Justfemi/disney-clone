import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(
      async(user) => {
        if(user) {
          setUser(user)
          navigate('/home')
        }
      }
    )
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider).then((result) => {
        // console.log(result);
        setUser(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState())
        navigate('/')
      }).catch((error => {
        alert(error.message)
      }));
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt=""/>
      </Logo>

      { !userName ? ( 
        <Login onClick={ handleAuth }>Login</Login> 
      ) : ( 
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="#"/>
              <span>home</span>
            </a>

            <a href="/home">
              <img src="./images/search-icon.svg" alt="#"/>
              <span>search</span>
            </a>

            <a href="/home">
              <img src="./images/watchlist-icon.svg" alt="#"/>
              <span>watchlist</span>
            </a>

            <a href="/home">
              <img src="./images/original-icon.svg" alt="#"/>
              <span>originals</span>
            </a>

            <a href="/home">
              <img src="./images/movie-icon.svg" alt="#"/>
              <span>movies</span>
            </a>

            <a href="/home">
              <img src="./images/series-icon.svg" alt="#"/>
              <span>series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={ handleAuth }>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  )
}

const Nav = Styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo =  Styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu =  Styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;
      margin-left: 8px;

      &:before {
        content: '';
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        background: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }


  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const Login =  Styled.a`
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 17px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all .2s ease 0s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = Styled.img`

`;

const DropDown = Styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  letter-spacing: 1.75px;
  box-shadow: rgb(0 0 0 /50%)0 0 18px 0;
  padding: 5px 7px;
  font-size: 14px;
  width: 100px;
  opacity: 0;
`;

const SignOut = Styled.div`
  position: relative;
  display: flex;
  height: 48px;
  width: 48px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown}{
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;