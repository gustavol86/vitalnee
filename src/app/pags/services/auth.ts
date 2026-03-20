import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://fakestoreapi.com/products';
    
  // Obtener un solo registro
  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
 
  // Obtener todos los registros
  getProductAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Cerrar sesión
  /*
  logout(): void {
    localStorage.removeItem('token');   // si guardas token
    localStorage.removeItem('usuario'); // si guardas datos del usuario
  }

  //Cerrar sesión Si solo se guarda un token
  logout2(): void {
    localStorage.clear();
  }
  */
}


/*
export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');

  if (!token) {
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }

  return true;
};
*/
