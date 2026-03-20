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
  //loading = false;
  producto: any = {};
  productos: any[] = [];

  
  cerrarSesion() {
    //this.auth.logout();
    this.router.navigate(['/login']);
  }


  ngOnInit() {
    //this.loading = true;
    this.errorMessage = '';

    this.auth.getProduct(1).subscribe({
      next: (data) => {

            //mostrar por consola el dato de la api
            console.log('Producto recibido:', data);
            this.producto = data;
            //this.loading = false

            console.log('ID: '+this.producto.id);
            console.log('Titulo: '+this.producto.title);
            console.log('Precio: '+this.producto.price)
            console.log('Descripcion: '+this.producto.description);
            console.log('Categoria: '+this.producto.category);
            console.log('Imagen: '+this.producto.image);        
      },
      error: (err) => {
        console.log('ERROR API:', err);
        this.errorMessage = 'ERROR API';
        //this.loading = false
      }
    });

    this.auth.getProductAll().subscribe({
      next: (data) => {

        console.log('DATA API =>', data);  // confirma que llegan
        this.productos = data;
        //this.loading = false
      },
      error: (err) => 
        console.error('ERROR API =>', err)
    });

  }
}
