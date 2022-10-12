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

export type Show = {
  id: string;
  name: string;
  summary: string;
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
