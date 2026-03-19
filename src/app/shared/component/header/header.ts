import { Component } from '@angular/core';
import { SiteConfigService } from '../../site-config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public site: SiteConfigService) {}
}
