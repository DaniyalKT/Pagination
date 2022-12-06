import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentPage: number = 0



  onActiveClass(index: number){
     return (index==this.currentPage) ? 'active' : ''
  }


  images = [
    {
      title: 'this is a beach',
      url: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=2000'
    },
    {
      title: 'this is a beach',
      url: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=2000'
    },
    {
      title: 'this is a beach',
      url: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=2000'
    }
  ]

}
