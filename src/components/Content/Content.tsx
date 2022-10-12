import { Grid, Typography } from '@mui/material';
import {
  Cover, CoverWrapper, RatingBar, RatingWrapper, Information,
} from './styles';

type ContentProps = {
  image: string;
  title: string;
  summary: string;
  rating: number;
  subTitle?: string;
};

export const Content = ({
  image, rating, summary, title, subTitle,
}: ContentProps) => (
  <Grid container spacing={2}>
    <CoverWrapper item xs={12} md={5}>
      <Cover src={image} />
    </CoverWrapper>

    <Information
      container
      item
      md={7}
      xs={12}
      spacing={1}
    >
      <Grid item>
        <Typography variant="h3" component="h1" align="center">
          {title}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1">
          {subTitle}
        </Typography>
      </Grid>

      <RatingWrapper container item>
        <RatingBar value={rating} precision={0.1} max={10} readOnly />
        <Typography variant="subtitle1" ml={1}>
          {rating}
        </Typography>
      </RatingWrapper>

      <Grid item>
        <Typography mb={5}>{summary}</Typography>
      </Grid>
    </Information>
  </Grid>
);
