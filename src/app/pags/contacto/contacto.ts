import { Component } from '@angular/core';
import { SiteConfigService } from '../../shared/site-config';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  constructor(public site: SiteConfigService) {}
}
