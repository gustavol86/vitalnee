
import { Routes } from '@angular/router';
import { Inicio } from './pags/inicio/inicio';
import { Aranceles } from './pags/aranceles/aranceles';
import { Galeria } from './pags/galeria/galeria';
import { Contacto } from './pags/contacto/contacto';

import { Psicologia } from './pags/especialidades/psicologia/psicologia';
import { Educaciondiferencial } from './pags/especialidades/educaciondiferencial/educaciondiferencial';
import { Psicopedagogia } from './pags/especialidades/psicopedagogia/psicopedagogia';
import { Fonoaudiologia } from './pags/especialidades/fonoaudiologia/fonoaudiologia';
import { Terapiaocupacional } from './pags/especialidades/terapiaocupacional/terapiaocupacional';
import { Educacionemocional } from './pags/especialidades/educacionemocional/educacionemocional';
import { Apoyopedagogico } from './pags/especialidades/apoyopedagogico/apoyopedagogico';

import { Prueba } from './pags/prueba/prueba';
import { LoginComponent } from './pags/login/login'

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio, title: 'Inicio' },
  { path: 'aranceles', component: Aranceles, title: 'Aranceles' },
  { path: 'galeria', component: Galeria, title: 'Galeria' },
  { path: 'contacto', component: Contacto, title: 'Contacto' },

  { path: 'psicologia', component: Psicologia, title: 'Psicologia' },
  { path: 'educaciondiferencial', component: Educaciondiferencial, title: 'Educaciondiferencial' },
  { path: 'psicopedagogia', component: Psicopedagogia, title: 'Psicopedagogia' },
  { path: 'fonoaudiologia', component: Fonoaudiologia, title: 'Fonoaudiologia' },
  { path: 'terapiaocupacional', component: Terapiaocupacional, title: 'Terapiaocupacional' },
  { path: 'educacionemocional', component: Educacionemocional, title: 'Educacionemocional' },
  { path: 'apoyopedagogico', component: Apoyopedagogico, title: 'Apoyopedagogico' },

  { path: 'prueba', component: Prueba, title: 'Prueba' },
  //{ path: 'login', component: LoginComponent, title: 'Login' },

  {
    path: 'login',
    loadComponent: () => import('./pags/login/login').then(m => m.LoginComponent)
  },

  { path: '**', redirectTo: 'inicio' } //Redireccionar a inicio si la pagina buscada no existe
];

/*
export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'Inicio',
    data: { showSlider: true }   // <- Aquí activas el slider
  },
  {
    path: 'aranceles',
    loadComponent: () => import('./pags/aranceles/aranceles').then(m => m.Aranceles),
    title: 'Aranceles',
    data: { showSlider: false }  // <- Aquí lo ocultas
  },
  { path: '**', redirectTo: '' }
];
*/



