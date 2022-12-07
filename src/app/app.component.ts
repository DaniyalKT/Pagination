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

  checkWindowsIndex(index: number){
    return Math.abs(this.currentPage - index) < 5
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
    },
    {
      title: 'this is a Sea0',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea9',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea8',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea7',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea6',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea5',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea4',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea3',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea2',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    },
    {
      title: 'this is a Sea1',
      url: 'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
    }
  ]

}
