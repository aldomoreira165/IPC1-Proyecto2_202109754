import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  CargarDatos(): any {
    return this.http.get(`${this.API_URI}/pokemones`);
  }

  obtenerPorId(id: string): any{
    return this.http.get(`${this.API_URI}/pokemonNumero/${id}`)
  }

  obtenerPorNombre(nombre: string): any{
    return this.http.get(`${this.API_URI}/pokemonNombre/${nombre}`)
  }

  obtenerPorTipo(tipo: string){
    return this.http.get(`${this.API_URI}/pokemonesTipo/${tipo}`)
  }

}
