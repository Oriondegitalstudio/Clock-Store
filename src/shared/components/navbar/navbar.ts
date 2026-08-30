import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../../core/i18n/i18n.service';
import { apiPath } from '../../enum/ApiPath';
import { imagePath } from '../../enum/imagePath';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive,TranslatePipe],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly imagePath = imagePath
  readonly i18n = inject(I18nService);
  languageOpen = false;
  mobileMenuOpen = false;
  links = [
    {
      label: 'navbar.home',
      link: apiPath.home
    },
    {
      label: 'navbar.shop',
      link: apiPath.store
    },
    {
      label: 'navbar.collections',
      link: apiPath.collections
    },
    {
      label: 'navbar.about',
      link: apiPath.about
    },
    {
      label: 'navbar.contact',
      link: apiPath.contact
    }
  ];
  changeLanguage(language: 'en' | 'fr' | 'ar'): void {
    this.i18n.setLanguage(language);
    this.languageOpen = false;
    this.mobileMenuOpen = false;
  }
  
}
