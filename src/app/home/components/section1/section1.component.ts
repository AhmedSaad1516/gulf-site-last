import {  Component } from '@angular/core';
import { LanguageServiceService } from '@app/services-translate/language-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  lang:any

  constructor(

    private languageService: LanguageServiceService,
    private translate: TranslateService
  ) {

  }
  ngOnInit(): void {


    this.lang = this.translate.currentLang || 'en';
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang')!;
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);

    this.updateHtmlLangAttr();
  }

  private updateHtmlLangAttr(): void {
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }
}
