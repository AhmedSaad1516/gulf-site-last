import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  private currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  isArabic(): boolean {
    return this.currentLang === 'ar';
  }

  setLang(newLang: string): void {
    this.currentLang = newLang;
    this.translate.setDefaultLang(newLang);
    this.translate.use(newLang);
  }
}
