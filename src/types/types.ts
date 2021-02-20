export interface IMovie {
  backdrop_path?: string;
  first_air_date?: string;
  name?: string;
  original_language?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  title?: string;
  origin_county?: string[];
  id?: number;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  genre_ids?: number[];
}

export interface Test {
  [key: string]: string | string[] | number | number[];
}

export interface RowProps {
  title: string;
  fetchURL: string;
  isLargeRow: boolean;
}
