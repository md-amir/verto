import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUnitsComponent } from './all-units/all-units.component';
import { UnitsRoutingModule } from './units-routing.module';



@NgModule({
  declarations: [
    AllUnitsComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
