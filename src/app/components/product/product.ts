import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  productData = {
    title: 'Medical & Wellness Products',
    subtitle: 'Free Shipping on Orders Over $59 or with Your First Purchase',
    tabs: [
      { label: 'Popular Items', active: true },
      { label: 'Top Rated', active: false },
      { label: 'Trending Items', active: false },
    ],
  };
}
