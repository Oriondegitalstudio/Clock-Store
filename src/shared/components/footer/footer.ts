import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { apiPath } from '../../enum/ApiPath';
import { imagePath } from '../../enum/imagePath';

@Component({
  imports: [
    CommonModule, RouterLink, RouterLinkActive,TranslatePipe
  ],
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly imagePath = imagePath;
  currentYear = new Date().getFullYear();
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

company = [
  {
    label: 'navbar.about',
    link: apiPath.about
  },
  {
    label: 'navbar.collections',
    link: apiPath.collections
  }
];

support = [
  {
    label: 'navbar.contact',
    link: apiPath.contact
  },
  {
    label: 'footer.shipping',
    link: '/shipping'
  },
  {
    label: 'footer.faq',
    link: '/faq'
  },
  {
    label: 'footer.privacy',
    link: '/privacy'
  }
];
}
