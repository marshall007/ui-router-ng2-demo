import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { UIRouterModule, UIView } from 'ui-router-ng2';

import { MAIN_STATES } from './app.states';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
      useHash: true,
      // configClass: MyRootUIRouterConfig
    })
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }
