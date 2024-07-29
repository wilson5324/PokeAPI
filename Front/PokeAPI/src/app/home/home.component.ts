import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon = new Pokemon(0, "", 0, 0, "");
  description: string = "";
  type: string[] = [];
  typeUrl: string[] = [];

  constructor(private pokeService: PokemonService) { }


  ngOnInit(): void {
    this.pokeService.getPokemonById(this.getRandomNumber(1, 999)).subscribe((res => {
      this.setBannerPokemon(res);
    }))

  }

  setBannerPokemon(res: any) {
    this.pokemon = new Pokemon(res.id, res.name, res.height, res.weight, res.sprites.other.home.front_default);
    this.description = `Id:${this.pokemon.id} Weight: ${this.pokemon.weight}   Height: ${this.pokemon.height}`;
    const types = res.types;
    for (let item of types) {
      this.type.push(item.type.name);
      this.typeUrl.push(item.type.url);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
