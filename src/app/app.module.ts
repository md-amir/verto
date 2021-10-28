import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { SideBarComponent } from './common-components/side-bar/side-bar.component';
import { TemplateComponent } from './common-components/template/template.component';
import { BlankPageComponent } from './common-components/blank-page/blank-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    TemplateComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
