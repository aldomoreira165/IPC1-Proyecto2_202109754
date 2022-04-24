import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template:`<button (click)="sendMessage()">Send Message</button>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuariosL = [
    {
        Usuario: "aldomoreira",
        Contraseña: "123"
    },
    {
        Usuario: "IPC1B",
        Contraseña: "Prueba123"
    },
    {
        Usuario: "IPC1F",
        Contraseña: "Prueba456"
    }
]

  mensaje="hola mundo"
  usernameS: string;
  passwordS: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  sendMessage(){
    this.messageEvent.emit(this.mensaje)
  }

  ngOnInit(): void {
  }

  LoginUser(){
    if( this.usuariosL.find(dato => dato.Usuario == this.usernameS) && this.usuariosL.find(datos => datos.Contraseña == this.passwordS)){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido @'.concat(this.usernameS),
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/Home'])
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Datos Incorrectos',
        text: 'Verifique sus datos y vuelva a intentarlo.',
      })
      console.log("Failed")
    }
  }
  
}
