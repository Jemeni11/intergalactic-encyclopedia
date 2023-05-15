type Starship = {
  /**
   * @description The name of this starship. The common name, such as Death Star.
   */
  name: string;
  /**
   * @description The model or official name of this starship. Such as T-65 X-wing
   * or DS-1 Orbital Battle Station.
   */
  model: string;
  /**
   * @description The manufacturer of this starship. Comma separated if more than one.
   */
  manufacturer: string;
  /**
   * @description The cost of this starship new, in galactic credits.
   */
  cost_in_credits: string;
  /**
   * @description The length of this starship in meters.
   */
  length: string;
  /**
   * @description The maximum speed of this starship in atmosphere. n/a if this
   * starship is incapable of atmosphering flight.
   */
  max_atmosphering_speed: string;
  /**
   * @description The number of personnel needed to run or pilot this starship.
   */
  crew: string;
  /**
   * @description The number of non-essential people this starship can transport.
   */
  passengers: string;
  /**
   * @description The maximum number of kilograms that this starship can transport.
   */
  cargo_capacity: string;
  /**
   * @description The maximum length of time that this starship can provide consumables
   * for its entire crew without having to resupply.
   */
  consumables: string;
  /**
   * @description The class of this starships hyperdrive.
   */
  hyperdrive_rating: string;
  /**
   * @description The Maximum number of Megalights this starship can travel in a standard
   *  hour. A Megalight is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring the
   * difference in speed of starships. We can assume it is similar to AU, the distance
   * between our Sun (Sol) and Earth.
   */
  MGLT: string;
  /**
   * @description The class of this starship, such as Starfighter or Deep Space Mobile
   * Battlestation.
   */
  starship_class: string;
  /**
   * @description An array of People URL Resources that this starship has been piloted by.
   */
  pilots: string[];
  /**
   * @description An array of Film URL Resources that this starship has appeared in.
   */
  films: string[];
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
  /**
   * @description The hypermedia URL of this resource.
   * @format uri
   */
  url: string;
};

export default Starship;
