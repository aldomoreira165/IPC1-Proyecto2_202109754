import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if(!texto) return lista
    const resultados=[];
    for(const dato of lista){
      if(dato.Nombre.indexOf(texto)>-1){
        resultados.push(dato)
      }
      if(dato.Tipo.indexOf(texto)>-1){
        resultados.push(dato)
      }
      if(dato.Numero.indexOf(texto)>-1){
        resultados.push(dato)
      }
    }
    return resultados
  }

}
