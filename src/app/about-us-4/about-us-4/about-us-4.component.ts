import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';

@Component({
  selector: 'app-about-us-4',
  templateUrl: './about-us-4.component.html',
  styleUrls: ['./about-us-4.component.css']
})
export class AboutUs4Component {
  dataaAll:any[]=[]

    constructor(private serv:HomeService){

    }
    ngOnInit(): void {

      this.getAll()

    }


  getAll(){
    this.serv.getAllinvestments().subscribe((data:any)=>{
      this.dataaAll=data.Investments.data
    })
  }
}
