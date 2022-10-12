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
  :hover {
    color: #ff5d20;
  }
`;

export const Logo = styled('img')`
  height: 33px;
  width: 33px;
  margin-right: 10px;
`;
