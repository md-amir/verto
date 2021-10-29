import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUnitsComponent } from './all-units/all-units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AllUnitsComponent
  ],
  providers: [ApiService],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    HttpClientModule,
  ]
})
export class UnitsModule { }
