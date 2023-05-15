type Person = {
  /**
   * @description The name of this person.
   */
  name: string;
  /**
   * @description The height of this person in meters.
   */
  height: string;
  /**
   * @description The mass of this person in kilograms.
   */
  mass: string;
  /**
   * @description The hair color of this person.
   */
  hair_color: string;
  /**
   * @description The skin color of this person.
   */
  skin_color: string;
  /**
   * @description The eye color of this person.
   */
  eye_color: string;
  /**
   * @description The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
   */
  birth_year: string;
  /**
   * @description The gender of this person (if known).
   */
  gender: string;
  /**
   * @description The url of the planet resource that this person was born on.
   */
  homeworld: string;
  /**
   * @description An array of urls of film resources that this person has been in.
   */
  films: string[];
  /**
   * @description The url of the species resource that this person is.
   */
  species: string[];
  /**
   * @description An array of vehicle resources that this person has piloted.
   */
  vehicles: string[];
  /**
   * @description An array of starship resources that this person has piloted.
   */
  starships: string[];
  /**
   * @description The url of this resource.
   * @format uri
   */
  url: string;
  /**
   * @description The ISO 8601 date format of the time that this resource was created.
   * @format date-time
   */
  created: string;
  /**
   * @description the ISO 8601 date format of the time that this resource was edited.
   * @format date-time
   */
  edited: string;
};

export default Person;
