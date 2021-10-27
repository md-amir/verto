import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { SideBarComponent } from './common-components/side-bar/side-bar.component';
import { TemplateComponent } from './common-components/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
