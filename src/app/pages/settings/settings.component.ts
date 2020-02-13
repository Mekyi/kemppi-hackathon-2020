import { Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('id.first-satellite') satellite1Name;
  @HostBinding('id.first-satellite') satellite2Name;
  @HostBinding('id.first-satellite') satellite3Name;
}
