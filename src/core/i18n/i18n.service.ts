import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'fr' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private readonly translate = inject(TranslateService);

  private readonly supportedLanguages: Language[] = ['en', 'fr', 'ar'];
  private readonly defaultLanguage: Language = 'en';
  private readonly storageKey = 'aurelis-language';

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setFallbackLang(this.defaultLanguage);

    const savedLanguage = this.getSavedLanguage();
    this.setLanguage(savedLanguage);
  }

  setLanguage(language: Language): void {
    if (!this.supportedLanguages.includes(language)) {
      language = this.defaultLanguage;
    }

    this.translate.use(language);
    this.updateDocumentLanguage(language);
    this.saveLanguage(language);
  }

  getCurrentLanguage(): Language {
    return (this.translate.currentLang as unknown as Language) || this.defaultLanguage;
  }

  getSupportedLanguages(): readonly Language[] {
    return this.supportedLanguages;
  }

  isRTL(): boolean {
    return this.getCurrentLanguage() === 'ar';
  }

  private getSavedLanguage(): Language {
    const savedLanguage = localStorage.getItem(this.storageKey);

    if (
      savedLanguage &&
      this.supportedLanguages.includes(savedLanguage as Language)
    ) {
      return savedLanguage as Language;
    }

    return this.defaultLanguage;
  }

  private saveLanguage(language: Language): void {
    localStorage.setItem(this.storageKey, language);
  }

  private updateDocumentLanguage(language: Language): void {
    const direction = language === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }
}