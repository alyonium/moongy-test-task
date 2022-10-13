export type Episode = {
  id: number;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  season: number;
  number: number;
  summary: string;
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
  summary: string;
  genres: string[];
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  _embedded: {
    episodes: Episode[];
  }
};

export type Show = ShowFromApi & {
  seasons: Record<number, Episode[]>;
};
