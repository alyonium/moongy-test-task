export type Episode = {
  id: number;
  image: {
    medium: string;
    original: string;
  } | null;
  rating: {
    average: number | null;
  };
  season: number;
  number: number;
  summary: string | null;
  name: string;
  _embedded: {
    show: {
      id: number;
      name: string;
    }
  }
};

export type ShowFromApi = {
  id: string;
  name: string;
  summary: string | null;
  genres: string[];
  image: {
    medium: string;
    original: string;
  } | null;
  rating: {
    average: number | null;
  };
  _embedded: {
    episodes: Episode[];
  }
};

export type Show = ShowFromApi & {
  seasons: Record<number, Episode[]>;
};
