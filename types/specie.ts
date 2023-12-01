type Specie = {
  /**
   * @description The name of this species.
   */
  name: string;
  /**
   * @description The classification of this species.
   */
  classification: string;
  /**
   * @description The designation of this species.
   */
  designation: string;
  /**
   * @description The average height of this person in centimeters.
   */
  average_height: string;
  /**
   * @description The average lifespan of this species in years.
   */
  average_lifespan: string;
  /**
   * @description A comma-seperated string of common hair colors for this species, none if this species does not typically have hair.
   */
  hair_colors: string;
  /**
   * @description A comma-seperated string of common skin colors for this species, none if this species does not typically have skin.
   */
  skin_colors: string;
  /**
   * @description A comma-seperated string of common eye colors for this species, none if this species does not typically have eyes.
   */
  eye_colors: string;
  /**
   * @description The URL of a planet resource, a planet that this species originates from.
   */
  homeworld: string;
  /**
   * @description The language commonly spoken by this species.
   */
  language: string;
  /**
   * @description An array of People URL Resources that are a part of this species.
   */
  people: string[];
  /**
   * @description An array of Film URL Resources that this species has appeared in.
   */
  films: string[];
  /**
   * @description The hypermedia URL of this resource.
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

export default Specie;
