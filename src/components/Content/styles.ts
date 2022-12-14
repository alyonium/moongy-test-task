import { styled } from '@mui/material/styles';
import { Grid, Rating, Typography } from '@mui/material';

export const RatingBar = styled(Rating)`
  color: #fcc733;
`;

export const Information = styled(Grid)`
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: center;
    align-items: center;
  }
`;

export const TitleWrapper = styled(Typography)`
  ${(props) => props.theme.breakpoints.down('md')} {
    text-align: center;
  }
` as typeof Typography;

export const RatingWrapper = styled(Grid)`
  justify-content: start;
  align-items: center;
  
  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: center;
  }
`;

export const CoverWrapper = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Cover = styled('img')`
  outline: 2px solid black;
  height: 400px;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
  max-width: 100%;

  
  ${(props) => props.theme.breakpoints.down('sm')} {
    height: 300px;
    max-height: 300px;
  }
`;

export const ContentWrapper = styled(Grid)`
  flex-direction: column;
  align-items: center;
`;
