import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(5)).subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>();

  LogOut(){
    Swal.fire({
      title: '¿Estás seguro que deseas abandonar la Pokedex?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro.'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Has abandonado la Pokedex.',
          '¡Esperamos que vuelvas pronto!',
          'success'
        )
        this.router.navigate(['/'])
      }
    })
  }
}
