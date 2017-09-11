import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: Http) { }

  listPokemons() {
    return this.http.get(`${this.baseUrl}/pokedex/1/`)
      .toPromise()
      .then((res: any) => {
        let pokemons: Pokemon[] = [];
        let reducedPokemonEntries = JSON.parse(res._body).pokemon_entries.splice(0, 50);

        reducedPokemonEntries.forEach((entry) => {
          let pokemon = new Pokemon();
          pokemon.name = entry.pokemon_species.name;
          pokemon.id = entry.entry_number;

          pokemons.push(pokemon);
        });
        return pokemons;
      });
  }

  getDetails(id: number) {
    return this.http.get(`${this.baseUrl}/pokemon/${id}/`)
      .toPromise()
      .then((res: any) => {
        let response = JSON.parse(res._body);
        let pokemon = new Pokemon();
        pokemon.name = response.name;
        pokemon.id = response.id;

        response.types.forEach((type) => {
          pokemon.types.push(type.type.name);
        });

        response.stats.forEach((stat) => {
          pokemon.stats.push({
            name: stat.stat.name,
            value: stat.base_stat
          });
        });

        for (let sprite in response.sprites) {
          if (response.sprites[sprite]) {
            pokemon.sprites.push({
              name: sprite,
              imagePath: response.sprites[sprite]
            });
          }
        }

        return pokemon;
      });
  }
}
