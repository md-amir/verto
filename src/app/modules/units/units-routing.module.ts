import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllUnitsComponent } from "./all-units/all-units.component";

const routes: Routes = [
    {
        path: '',
        component: AllUnitsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnitsRoutingModule { }
