import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  private config: { [key: string]: string } = environment.siteConfig;

  get(key: string): string {
    return this.config[key] ?? "";
  }
}