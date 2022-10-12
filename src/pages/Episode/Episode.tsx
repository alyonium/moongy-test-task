import { useParams } from 'react-router-dom';
import { useGetEpisodeByIdQuery } from 'api';
import { Grid, Container } from '@mui/material';
import { Content } from 'components/Content';
import { LoaderBox } from 'components/LoaderBox';
import { ErrorMessage } from 'components/ErrorMessage';
import { removeHtmlTags } from 'utils';
import { ContentWrapper, BackLinkWrapper } from './styles';

export const Episode = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEpisodeByIdQuery(id!);
  if (isLoading) {
    return <LoaderBox height="calc(100vh - 50px)" />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  if (!data) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <ContentWrapper
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <BackLinkWrapper variant="outlined" color="secondary" href={`/show/${data._embedded.show.id}`}>
            &laquo;{data._embedded.show.name}&raquo;
          </BackLinkWrapper>
        </Grid>
        <Grid item xs={12}>
          <Content
            summary={removeHtmlTags(data.summary)}
            image={data.image.original}
            rating={data.rating.average}
            subTitle={`season ${data.season}, episode ${data.number}`}
            title={data.name}
          />
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
