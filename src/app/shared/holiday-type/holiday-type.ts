export class HolidayType {
  constructor(public id: number, public name: string) {}
}

export const TYPE_IDS = {
  ALL: 0,
  COUNTRY: 1,
  STATE: 2,
  CITY: 3,
};

export const TYPES: HolidayType[] = [
  new HolidayType(TYPE_IDS.ALL, 'Todos'),
  new HolidayType(TYPE_IDS.COUNTRY, 'Nacionais'),
  new HolidayType(TYPE_IDS.STATE, 'Estaduais'),
  new HolidayType(TYPE_IDS.CITY, 'Municipais'),
];
