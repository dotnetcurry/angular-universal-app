import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(meta: Meta, title: Title) {
    title.setTitle('Explore Pokemons');
    meta.addTags([
      {
        name: 'author', content: 'DotNetCurry'
      },
      {
        name: 'keywords', content: 'angular-universal-seo'
      },
      {
        name: 'description', content: 'Describes SEO with Angular'
      }
    ]);
  }
}
