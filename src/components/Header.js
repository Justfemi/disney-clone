import React from 'react';
import Styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt=""/>
      </Logo>
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
      {/* <Login>Login</Login> */}
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

// const Login =  Styled.a`
// `;

export default Header;