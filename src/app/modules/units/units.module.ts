import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUnitsComponent } from './all-units/all-units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AllUnitsComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule
  ]
})
export class UnitsModule { }
