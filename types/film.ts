type Film = {
  /**
   * @description The title of this film.
   */
  title: string;
  /**
   * @description The episode number of this film.
   */
  episode_id: number;
  /**
   * @description The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * @description The director of this film.
   */
  director: string;
  /**
   * @description The producer(s) of this film.
   */
  producer: string;
  /**
   * @description The release date at original creator country.
   * @format date
   */
  release_date: string;
  /**
   * @description The people resources featured within this film.
   */
  characters: string[];
  /**
   * @description The planet resources featured within this film.
   */
  planets: string[];
  /**
   * @description The starship resources featured within this film.
   */
  starships: string[];
  /**
   * @description The vehicle resources featured within this film.
   */
  vehicles: string[];
  /**
   * @description The species resources featured within this film.
   */
  species: string[];
  /**
   * @description The url of this resource
   * @format uri
   */
  url: string;
  /**
   * @description The ISO 8601 date format of the time that this resource was created.
   * @format date-time
   */
  created: string;
  /**
   * @description The ISO 8601 date format of the time that this resource was edited.
   * @format date-time
   */
  edited: string;
};

export default Film;
