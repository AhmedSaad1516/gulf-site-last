import { Component } from '@angular/core';
import { MapService } from '@app/shared/services/map.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<span><i class="fa-solid fa-angle-right"></i></span>', '<span><i class="fa-solid fa-angle-left"></i><span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    rtl:true,
    autoplay:true,
    autoplaySpeed:1000
  }

  constructor(private serv:MapService){

  }


}
