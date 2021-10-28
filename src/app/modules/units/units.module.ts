import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUnitsComponent } from './all-units/all-units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AllUnitsComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class UnitsModule { }
