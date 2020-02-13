import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    SettingsComponent,
  ],
})
export class SettingsModule {}
