import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<span><i class="fa-solid fa-arrow-right"></i></span>', '<span><i class="fa-solid fa-arrow-left"></i></span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    rtl:true,
    autoplay:true,
    autoplaySpeed:1000
  }





  dataaAll:any[]=[]

    constructor(private serv:HomeService){

    }

    ngOnInit(): void {
      this.getAll()
    }

  getAll(){
    this.serv.getAllactivities().subscribe((data:any)=>{
      this.dataaAll=data.activities.data
    })
  }
}
