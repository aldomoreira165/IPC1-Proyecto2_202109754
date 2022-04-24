import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ChildActivationStart } from '@angular/router';
import { subscribeOn } from 'rxjs';

import { PokemonInterface } from 'src/app/models/PokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `<app-login (messageEvent="receiveMessage($event)")></app-login>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() childMessage: string;

  filtro_value = ''
  datosPokemon: PokemonInterface[] = [];

  handleSearch(value: string){
    this.filtro_value = value
  }

  constructor(public pokemonservice: PokemonService) { }

  message: string;

  receiveMessage($event){
    this.message = $event
  }  

  ngOnInit(): void {
    this.pokemonservice.CargarDatos().subscribe(
      ((valores: any[]) => this.datosPokemon = valores)
    )
  }

  init(value: string): void {
    this.pokemonservice.CargarDatos().subscribe(async (res) =>
    {
      let valores: any = res;
      this.datosPokemon = valores;
      console.log("Datos obtenidos");
      console.log(valores);
    },
    err => console.log(err));
  }

  obtenerPokemonId(id: string) {
    this.pokemonservice.obtenerPorId(id).subscribe(async(res) =>
     {
      let valores: any = res;
      this.datosPokemon = valores;
      console.log('Empieza nombre')
      console.log(valores)
      console.log('Termina nombre')
    },
    err => console.log(err))
  }

  obtenerPokemonNombre(nombre: string) {
    this.pokemonservice.obtenerPorNombre(nombre).subscribe(async(res) =>
     {
      let valores: any = res;
      this.datosPokemon = valores;
      console.log('Empieza nombre')
      console.log(valores)
      console.log('Termina nombre')
    },
    err => console.log(err))
  }

  obtenerPokemonTipo(tipo: string) {
    this.pokemonservice.obtenerPorTipo(tipo).subscribe(async(res) =>
     {
      let valores: any = res;
      this.datosPokemon = valores;
      console.log('Empieza tipo')
      console.log(valores)
      console.log('Termina tipo')
    },
    err => console.log(err))
  }
}
