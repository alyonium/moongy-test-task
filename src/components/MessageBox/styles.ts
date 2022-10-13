import { styled } from '@mui/material/styles';

export const MessageWrapper = styled('div')`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 105px);
  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
    height: calc(100vh - 145px);
  }
`;
