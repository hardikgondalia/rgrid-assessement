import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.scss',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlider {
  slides = [
    {
      img: 'assets/images/product-grid/product-grid-one.png',
      title: 'Enjoy 50% OFF',
      subtitle: 'Your First Order',
      btnText: 'SHOP NOW',
      btnLink: '#',
    },
    {
      img: 'assets/images/product-grid/product-grid-five.jpg',
      title: 'Free Delivery',
      subtitle: 'On Orders Above ₹500',
      btnText: 'ORDER NOW',
      btnLink: '#',
    },
    {
      img: 'assets/images/product-grid/product-grid-six.jpg',
      title: 'Flat 30% OFF',
      subtitle: 'On All Medicines',
      btnText: 'BUY NOW',
      btnLink: '#',
    },
  ];
}
