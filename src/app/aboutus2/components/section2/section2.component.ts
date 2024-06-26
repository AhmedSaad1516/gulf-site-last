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



  dataHostry:any[]=[]
  constructor(private serv:HomeService){

  }
  ngOnInit(): void {
    this.getAllPosts()

  }
getAllPosts(){
  this.serv.getAllhistories().subscribe((data:any)=>{
    this.dataHostry=data.Historys.data
  })
}
}
