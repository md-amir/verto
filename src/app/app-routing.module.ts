import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './common-components/blank-page/blank-page.component';

const routes: Routes = [
  {
    path: 'units',
    loadChildren: () => import('./modules/units/units.module').then(m => m.UnitsModule)
  },
  {
    path: 'blank',
    component: BlankPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
