type Image = {
  medium: string;
  original: string;
};

export type Episode = {
  id: number;
  image: Image | null;
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
  image: Image | null;
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
