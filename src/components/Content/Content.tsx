import { Grid, Typography } from '@mui/material';
import {
  Cover, CoverWrapper, RatingBar, RatingWrapper, Information, ContentWrapper,
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
  <ContentWrapper container spacing={2}>
    <CoverWrapper item>
      <Cover src={image} />
    </CoverWrapper>

    <Information
      container
      item
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
        <Typography mb={2}>{summary}</Typography>
      </Grid>
    </Information>
  </ContentWrapper>
);
