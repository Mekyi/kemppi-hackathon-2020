import { Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  private data =[{
    stype: 'Kempower S-Series',
    maxpower:'80',
    fwversion:'1.1.0',
    connector:'CCS',
    serial:'S001001',
    powernow:'34',
    poweravg:'35',
    usage:'20',
    usageavg:'30',
    used:'23',
    usedavg:'33',
    free:'22',
    charging:'22',
    idle:'23',
    car:'Tesla',
    soccurrent:'34',
    image: 'satellite.png',

  },{
    stype: 'Kempower S-Series',
    maxpower:'80',
    fwversion:'1.1.0',
    connector:'CCS',
    serial:'S001010',
    powernow:'34',
    poweravg:'35',
    usage:'20',
    usageavg:'30',
    used:'23',
    usedavg:'33',
    free:'22',
    charging:'22',
    idle:'23',
    car:'Tesla',
    soccurrent:'34',
    image: 'satellite.png',
  },
{
    stype: 'Kempower S-Series',
    maxpower:'80',
    fwversion:'1.1.0',
    connector:'CCS',
    serial:'S001011',
    powernow:'34',
    poweravg:'35',
    usage:'20',
    usageavg:'30',
    used:'23',
    usedavg:'33',
    free:'22',
    charging:'22',
    idle:'23',
    car:'Tesla',
    soccurrent:'34',
    image: 'satellite.png',
}]
}