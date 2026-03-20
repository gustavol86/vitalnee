import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/component/header/header';
import { Nav } from './shared/component/nav/nav';
import { Footer } from './shared/component/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Nav,
    Footer,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('formulario');

}