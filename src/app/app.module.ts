import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

  

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

  

import { ClientModule } from './client/client.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  

@NgModule({

  declarations: [

    AppComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    ClientModule,

    HttpClientModule,

    BrowserAnimationsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }