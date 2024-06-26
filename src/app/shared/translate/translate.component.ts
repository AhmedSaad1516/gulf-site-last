import { Component, Renderer2 } from '@angular/core';
import { LanguageServiceService } from '@app/services-translate/language-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  lang: string = 'en';

  constructor(
    private languageService: LanguageServiceService,
    private translate: TranslateService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.lang = this.translate.currentLang || 'en';
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.lang = storedLang;
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    this.updateHtmlLangAttr();
  }

  changeLanguage() {
    window.location.reload()
    const newLang = this.lang === 'ar' ? 'en' : 'ar';
    this.updateLanguage(newLang);
  }

  private updateLanguage(newLang: string) {
    window.location.reload()

    localStorage.setItem('lang', newLang);
    this.lang = newLang;
    this.translate.setDefaultLang(newLang);
    this.translate.use(newLang);
    this.updateHtmlLangAttr();
  }

  private updateHtmlLangAttr() {
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.lang = this.lang;
    htmlTag.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }
}
