// export class Weather {
//   constructor(public city: string, public currTemp: number, public weatherType: string, public minTemp: number, public maxTemp: number) { }
// }

export interface Weather {
  city: string;
  currTemp: number;
  type: string;
  minTemp: number;
  maxTemp: number;
}
