import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const HeaderWrapper = styled(Link)`
  height: 50px;
  font-family: 'Comfortaa', sans-serif, cursive;
  text-decoration: none;
  font-size: 30px;
  color: #b51d3b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1000;
  margin-bottom: 10px;

  :after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -2px;
    width: 0;
    height: 2px; 
    background-color: #bf1f41;
    transition: width 0.5s; 
  }

  :hover:after {
    content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px; 
    background-color: #f95a1c;
    transition: width 0.5s; 
  }
  
  :hover {
    color: #f95a1c;
  }
`;

export const Logo = styled('img')`
  height: 33px;
  width: 33px;
  margin-right: 10px;
`;
