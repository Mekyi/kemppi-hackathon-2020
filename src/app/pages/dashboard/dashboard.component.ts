import { Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  private data =[{
    stype: '',
    maxpower:'',
    fwversion:'',
    connector:'',
    serial:'',
    powernow:'',
    poweravg:'',
    usage:'',
    usageavg:'',
    used:'',
    usedavg:'',
    free:'',
    charging:'',
    idle:'',
    car:'',
    soccurrent:'',
    image: 'satellite.png',

  },{
  stype: '',
  image: 'satellite.png',
  },
{
  stype: '',
  image: 'satellite.png',
}]
}