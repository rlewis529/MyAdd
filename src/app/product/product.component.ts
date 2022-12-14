import { Component, Input } from '@angular/core';
import Product from '../product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
  styles: [
    'app-rating {color:orange;}'
  ]
})
export class ProductComponent  {

@Input() data: Product = {
  imageUrl: '',
  productName: '',
  releasedDate: new Date(1900, 0, 1),
  rating: 0, 
  numOfReviews: 0,
  description: '',
  }
}
