import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteConfigService } from '../../site-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  constructor(public site: SiteConfigService) {}
}