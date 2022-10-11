import { useParams } from 'react-router-dom';
import { useGetEpisodeByIdQuery } from 'api';

export const Episode = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetEpisodeByIdQuery(id!);
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <p>
      Episode
      {data!.name}
    </p>
  );
};
