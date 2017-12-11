import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService,
    meta: Meta,
    title: Title) {
    title.setTitle('Pokemons list page');
    meta.addTags([
      {
        name: 'author', content: 'Ravi Kiran'
      },
      {
        name: 'keywords', content: 'Angular 4 SEO'
      },
      {
        name: 'description', content: 'List of pokemons'
      }
    ]);
  }

  ngOnInit() {
    this.pokemonService.listPokemons()
      .then(pokemons => {
        this.pokemonList = pokemons;
      });
  }

}
