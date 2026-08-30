import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private readonly brandName = 'Aurelis';
  updateSeo(title: string, description: string): void {
    this.title.setTitle(title);
    const fullTitle =
      title === this.brandName
        ? this.brandName
        : `${title} | ${this.brandName}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });
    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: fullTitle,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });    
  }
}
