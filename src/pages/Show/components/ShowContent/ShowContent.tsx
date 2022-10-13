import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Container,
  Grid, Link, List, ListItem, ListItemAvatar, ListItemText,
  Typography,
} from '@mui/material';
import { MessageBox } from 'components/MessageBox';
import NoImage from 'icons/camera.png';
import { Episode } from 'types';
import { removeHtmlTags } from 'utils';
import { Content } from 'components/Content';
import { ErrorMessage } from 'components/ErrorMessage';
import { useGetShowByIdQuery } from 'api';
import {
  AccordionBox, ContentWrapper, ListImage, AvatarBox,
} from './styles';

export const ShowContent = ({ id }: { id: string }) => {
  const { data, isError, isLoading } = useGetShowByIdQuery(id);

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
            summary={removeHtmlTags(data.summary)}
            image={data.image?.original}
            rating={data.rating?.average}
            title={data.name}
            subTitle={data.genres.join(', ')}
          />
        </Grid>

        <Grid item xs={12}>
          <AccordionBox>
            {
              Object.entries(data.seasons).map(([season, episodes]) => (
                <Accordion key={season}>
                  <AccordionSummary expandIcon="⌄">
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
                                    <AvatarBox>
                                      {episode.image?.medium
                                        ? <img src={episode.image?.medium} alt={episode.name} />
                                        : (<ListImage src={NoImage} alt={episode.name} />)}
                                    </AvatarBox>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={(<Link href={`/episode/${episode.id}`}>{episode.name}</Link>)}
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
          </AccordionBox>
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
