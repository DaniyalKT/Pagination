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
      title: 'this is a Beach',
      url: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=2000'
    },
    {
      title: 'this is a jungle',
      url: 'https://www.guide-bearn-pyrenees.com/_bibli/annonces/3036/hd/picdumidiossau.jpg'
    },
    {
      title: 'this is a Sea',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    }
  ]

}
