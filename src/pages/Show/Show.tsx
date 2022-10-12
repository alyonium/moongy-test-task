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
  Typography,
} from '@mui/material';
import { Content } from 'components/Content';
import { LoaderBox } from 'components/LoaderBox';
import { ErrorMessage } from 'components/ErrorMessage';
import { useGetShowByIdQuery } from 'api';
import { removeHtmlTags } from 'utils';
import { Episode } from 'types';
import { ContentWrapper } from './styles';

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
    <Container maxWidth="xl">
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
          />
        </Grid>

        <Grid container item xs={10}>
          <Typography mb={5}>About</Typography>

        </Grid>

        <Grid item xs={10}>
          <List>
            {data._embedded.episodes?.map((item: Episode) => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar>
                    <img src={item.image?.medium} alt={item.name} />
                  </Avatar>
                </ListItemAvatar>
                <Link href={`/episode/${item.id}`}>
                  <ListItemText
                    primary={item.name}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
