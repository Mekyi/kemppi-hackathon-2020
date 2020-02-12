import { Unit } from './unit.model';

export class PowerSupply extends Unit {
  power: number;
  chargeHours: number;
  freeHours: number;
  totalHours: number;
  totalChargePower: number;
}
