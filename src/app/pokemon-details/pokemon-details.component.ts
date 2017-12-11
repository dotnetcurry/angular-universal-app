import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  id: number;
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    meta: Meta,
    title: Title) {
    title.setTitle('Pokemon details page');
    meta.addTags([
      {
        name: 'author', content: 'Ravi Kiran'
      },
      {
        name: 'keywords', content: 'Angular 4 SEO'
      },
      {
        name: 'description', content: 'Details of a pokemon'
      }
    ]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.pokemonService.getDetails(this.id)
        .then((details) => {
          this.pokemon = details;
        });
    });
  }
}