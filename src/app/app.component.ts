import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    'app-rating { color: orange; }'
  ]
})
export class AppComponent {
  title = 'My First Angular App!';
  imageUrl: string = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid: boolean = false;

  onClickMe($event: any){
    console.log("Clicked", $event);
  }
}
