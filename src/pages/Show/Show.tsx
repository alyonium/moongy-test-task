import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { Content } from 'components/Content';
import { LoaderBox } from 'components/LoaderBox';
import { ErrorMessage } from 'components/ErrorMessage';
import { useGetShowByIdQuery } from 'api';
import { removeHtmlTags } from 'utils';
import { Episode } from 'types';
import { ContentWrapper, AccordionBlock } from './styles';

export const Show = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetShowByIdQuery(id!);

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
    <Container maxWidth="lg">
      <ContentWrapper
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Content
            summary={removeHtmlTags(data.summary)}
            image={data.image.original}
            rating={data.rating.average}
            title={data.name}
            subTitle={data.genres.join(', ')}
          />
        </Grid>

        <Grid item xs={12}>
          <AccordionBlock>
            {
              Object.entries(data.seasons).map(([season, episodes]) => (
                <Accordion key={season}>
                  <AccordionSummary
                    expandIcon="⌄"
                  >
                    <Typography>Season {season}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <Grid container>
                        {
                          episodes.map((episode: Episode) => (
                            <Grid item xs={12} sm={6} md={4} key={episode.id}>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <img src={episode.image?.medium} alt={episode.name} />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary={(
                                    <Link href={`/episode/${episode.id}`}>
                                      {episode.name}
                                    </Link>
                                  )}
                                  secondary={`Episode ${episode.number}`}
                                />
                              </ListItem>
                            </Grid>
                          ))
                        }
                      </Grid>
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </AccordionBlock>
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
