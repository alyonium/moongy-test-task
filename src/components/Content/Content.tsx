import { Grid, Typography } from '@mui/material';
import NoImage from 'icons/no-image.png';
import { ReactNode } from 'react';
import {
  Cover, CoverWrapper, RatingBar, RatingWrapper, Information, ContentWrapper, TitleWrapper,
} from './styles';

type ContentProps = {
  image: string | undefined;
  title: string;
  summary: string | undefined;
  rating: number | null;
  subTitle: string;
  preTitle?: ReactNode;
};

export const Content = ({
  image, rating, summary, title, subTitle, preTitle,
}: ContentProps) => (
  <ContentWrapper container spacing={2}>
    <CoverWrapper item>
      <Cover src={image || NoImage} />
    </CoverWrapper>

    <Information container item spacing={1}>
      <Grid item>
        {preTitle}
      </Grid>

      <Grid item>
        <TitleWrapper variant="h3" component="h1">
          {title}
        </TitleWrapper>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1">
          {subTitle}
        </Typography>
      </Grid>

      <RatingWrapper container item>
        <RatingBar value={rating} precision={0.1} max={10} readOnly />
        <Typography variant="subtitle1" ml={1}>
          {rating || 'no ratings yet'}
        </Typography>
      </RatingWrapper>

      <Grid item>
        <Typography mb={2}>{summary || 'no description'}</Typography>
      </Grid>
    </Information>
  </ContentWrapper>
);
