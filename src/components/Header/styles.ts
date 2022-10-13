import { styled } from '@mui/material/styles';
import AsyncSelect from 'react-select/async';
import { Container, Link } from '@mui/material';

export const HeaderWrapper = styled(Container)`
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  z-index: 1000;
  top: 0;
  position: sticky;
  background: #fff;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  
  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LogoWrapper = styled(Link)`
  font-family: 'Comfortaa', sans-serif, cursive;
  text-decoration: none;
  font-size: 30px;
  color: #b51d3b;
  font-weight: bold;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  
  :hover {
    color: #f95a1c;
  }
  
  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
    justify-content: center;
    
    :hover {
      color: #b51d3b;
    }
  }
`;

export const LogoImage = styled('img')`
  height: 33px;
  width: 33px;
  margin-right: 10px;
`;

export const SearchBar = styled(AsyncSelect)`
  width: 300px;  
  font-size: 16px;
  
  :hover {
    border-color:  #b51d3b !important;

  }
` as AsyncSelect;
