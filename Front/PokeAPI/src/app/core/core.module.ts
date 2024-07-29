import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class CoreModule { }
