type Vehicle = {
  /**
   * @description The name of this vehicle. The common name, such as Sand Crawler.
   */
  name: string;
  /**
   * @description The model or official name of this vehicle.
   * Such as All Terrain Attack Transport.
   */
  model: string;
  /**
   * @description The manufacturer of this vehicle.
   * Comma separated if more than one.
   */
  manufacturer: string;
  /**
   * @description The cost of this vehicle new, in galactic credits.
   */
  cost_in_credits: string;
  /**
   * @description The length of this vehicle in meters.
   */
  length: string;
  /**
   * @description The maximum speed of this vehicle in atmosphere.
   */
  max_atmosphering_speed: string;
  /**
   * @description The number of personnel needed to run or pilot this vehicle.
   */
  crew: string;
  /**
   * @description The number of non-essential people this vehicle can transport.
   */
  passengers: string;
  /**
   * @description The maximum number of kilograms that this vehicle can transport.
   */
  cargo_capacity: string;
  /**
   * @description The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
   */
  consumables: string;
  /**
   * @description The class of this vehicle, such as Wheeled.
   */
  vehicle_class: string;
  /**
   * @description An array of People URL Resources that this vehicle has been piloted by.
   */
  pilots: string[];
  /**
   * @description An array of Film URL Resources that this vehicle has appeared in.
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

export default Vehicle;
