import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';

@Component({
  selector: 'app-about-us-3',
  templateUrl: './about-us-3.component.html',
  styleUrls: ['./about-us-3.component.css']
})
export class AboutUs3Component {
  dataTeam:any[]=[]
  constructor(private serv:HomeService){

  }
  ngOnInit(): void {
    this.getAllTeam()

  }
  getAllTeam(){
  this.serv.getAllTeams().subscribe((data:any)=>{
    this.dataTeam=data.teams.data
  })
}
}
