export class Unit {
  id: number;
  description: string;
  coordinates: {lat: number, lon: number};
  power: number;
  chargeHours: number;
  freeHours: number;
  totalHours: number;
  totalChargePower: number;
}
