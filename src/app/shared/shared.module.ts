import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { TranslateComponent } from './translate/translate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    TranslateComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    TranslateComponent,
    TranslateModule
  ]
})
export class SharedModule { }
