import { ShowFromApi } from '../../types';

export const loadOptions = async (search: string) => {
  const params = new URLSearchParams({ q: search });
  const options = await fetch(`https://api.tvmaze.com/search/shows?${params}`).then((res) => res.json());
  return options.map((el: { show: ShowFromApi }) => ({
    value: el.show.id,
    label: el.show.name,
  }));
};
