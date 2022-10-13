import { useParams } from 'react-router-dom';
import { useGetEpisodeByIdQuery } from 'api';
import {
  Grid, Container, CircularProgress, Typography,
} from '@mui/material';
import { Content } from 'components/Content';
import { removeHtmlTags } from 'utils';
import { MessageBox } from 'components/MessageBox';
import { ErrorMessage } from 'components/ErrorMessage';
import { ContentWrapper, BackLink } from './styles';

export const Episode = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEpisodeByIdQuery(id!);

  if (isLoading) {
    return (
      <MessageBox>
        <CircularProgress />
      </MessageBox>
    );
  }

  if (isError) {
    return (
      <MessageBox>
        <ErrorMessage />
      </MessageBox>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Container maxWidth="lg">
      <ContentWrapper container>
        <Grid item xs={12}>
          <Content
            preTitle={<Typography variant="h6"><BackLink href={`/?showId=${data._embedded.show.id}`}>{data._embedded.show.name}</BackLink></Typography>}
            summary={removeHtmlTags(data.summary)}
            image={data.image?.original}
            rating={data.rating?.average}
            subTitle={`season ${data.season}, episode ${data.number}`}
            title={data.name}
          />
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
