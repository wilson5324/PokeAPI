import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { TypesModule } from './types/types.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,
    AbilitiesModule,
    TypesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
