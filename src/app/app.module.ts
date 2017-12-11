import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routesModule } from './app.routes';

import { AppComponent } from './app.component';
import { PokemonService } from './pokemon.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    routesModule,
    HttpClientModule,
    BrowserTransferStateModule    
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
