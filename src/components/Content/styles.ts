import { styled } from '@mui/material/styles';
import { Grid, Rating } from '@mui/material';

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
  height: 400px;
  max-height: 400px;
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;
  ${(props) => props.theme.breakpoints.down('sm')} {
    max-height: 300px;
  }
`;
