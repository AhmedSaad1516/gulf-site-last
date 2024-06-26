import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {





  datasetting:any={}

    constructor(private serv:HomeService){

    }
    ngOnInit(): void {

      this.getAllsetting()

    }


  getAllsetting(){
    this.serv.getAllsettings().subscribe((data:any)=>{
      this.datasetting=data.setting
    })
  }
}
