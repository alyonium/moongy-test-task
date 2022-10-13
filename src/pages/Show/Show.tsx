import { ShowContent } from './components/ShowContent';
import { useQuery } from './hooks';
import { SearchMessage } from './components/SearchMessage';

export const Show = () => {
  const query = useQuery();
  const id = query.get('showId');

  if (id) {
    return <ShowContent id={id} />;
  }

  return <SearchMessage />;
};
