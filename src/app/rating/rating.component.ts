import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  rating: number = 0;

  onClick(ratingValue: number){
    this.rating = ratingValue
  }
}
