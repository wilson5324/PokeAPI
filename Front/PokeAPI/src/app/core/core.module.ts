import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './services/pokemon.service';



@NgModule({
  declarations: [
    PokemonService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
