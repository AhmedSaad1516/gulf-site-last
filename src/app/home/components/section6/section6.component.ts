import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component {
dataPost:any[]=[]


  constructor(private serv:HomeService){

  }
  ngOnInit(): void {
    this.getAllPosts()


  }
getAllPosts(){
  this.serv.getAllPost().subscribe((data:any)=>{
    this.dataPost=data.posts.data
  })
}

}



