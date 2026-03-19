// src/app/shared/component/header/nav/nav.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
  //  CommonModule, 
    RouterModule
  ],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'], // ← plural y arreglo
})
export class Nav {}