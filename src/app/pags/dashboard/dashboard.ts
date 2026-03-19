import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [ ReactiveFormsModule, CommonModule, FormsModule ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  errorMessage = '';

  desc: string='';


producto: any;

  ngOnInit() {
    this.auth.getProduct(1).subscribe({
      next: (data) => {

            //mostrar por consola el dato de la api
            console.log('Producto recibido:', data);
            this.producto = data;
            
            console.log('ID: '+this.producto.id);
            console.log('Titulo: '+this.producto.title);
            console.log('Precio: '+this.producto.price)
            console.log('Descripcion: '+this.producto.description);
            console.log('Categoria: '+this.producto.category);
            console.log('Imagen: '+this.producto.image);        
      },
      error: (err) => {
        console.log('Error API:', err);
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}
