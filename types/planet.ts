type Planet = {
  /**
   * @description The name of this planet.
   * @example Tatooine
   */
  name: string;
  /**
   * @description The number of standard hours it takes for this planet to complete a single rotation on its axis.
   * @example 23
   */
  rotation_period: string;
  /**
   * @description The number of standard days it takes for this planet to complete a single orbit of its local star.
   * @example 304
   */
  orbital_period: string;
  /**
   * @description The diameter of this planet in kilometers.
   * @example 10465
   */
  diameter: string;
  /**
   * @description The climate of this planet. Comma-separated if diverse.
   * @example arid
   */
  climate: string;
  /**
   * @description A number denoting the gravity of this planet. Where 1 is normal.
   * @example 1
   */
  gravity: string;
  /**
   * @description The terrain of this planet. Comma-separated if diverse.
   * @example desert
   */
  terrain: string;
  /**
   * @description The percentage of the planet surface that is naturally occurring water or bodies of water.
   * @example 1
   */
  surface_water: string;
  /**
   * @description The average population of sentient beings inhabiting this planet.
   * @example 200000
   */
  population: string;
  /**
   * @description An array of People URL Resources that live on this planet.
   */
  residents: string[];
  /**
   * @description An array of Film URL Resources that this planet has appeared in.
   */
  films: string[];
  /**
   * @description The ISO 8601 date format of the time that this resource was created.
   * @format date-time
   * @example 2014-12-09T13:50:49.641000Z
   */
  created: string;
  /**
   * @description The ISO 8601 date format of the time that this resource was edited.
   * @format date-time
   * @example 2014-12-20T20:58:18.411000Z
   */
  edited: string;
  /**
   * @description The hypermedia URL of this resource.
   * @format uri
   * @example https://swapi.dev/api/planets/1/
   */
  url: string;
};

export default Planet;
