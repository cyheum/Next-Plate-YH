export interface ISelectedDate {
  year: number;
  month: number;
  date: number;
  day: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface ActionType {
  type: string;
}

export * from './home';
