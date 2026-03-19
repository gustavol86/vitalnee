import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/component/header/header';
import { Nav } from './shared/component/nav/nav';
import { Footer } from './shared/component/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Nav,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('formulario');

}