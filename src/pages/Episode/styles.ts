import { styled } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';

export const ContentWrapper = styled(Grid)`
  justify-content: center;
  align-items: start;
`;

export const BackLink = styled(Link)`
  color: #b51d3b;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  
  :hover {
    color: #f95a1c;
  }
  
  ${(props) => props.theme.breakpoints.down('md')} {
    :hover {
      color: #b51d3b;
    }
  }
`;
