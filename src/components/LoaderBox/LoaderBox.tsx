import { CircularProgress } from '@mui/material';
import { LoaderWrapper } from './styles';

type LoaderBoxProps = {
  height: string;
};

export const LoaderBox = ({ height }: LoaderBoxProps) => (
  <LoaderWrapper style={{ height }}>
    <CircularProgress />
  </LoaderWrapper>
);
