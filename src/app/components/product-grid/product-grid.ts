import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductSlider } from '../product-slider/product-slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
  imports: [ProductSlider, CommonModule],
})
export class ProductGrid {
  productGridData = {
    leftSlider: true,
    rightColumn: {
      mainCard: {
        image: 'assets/images/product-grid/product-grid-two.png',
        alt: 'Stethoscope',
        imageClass: 'object-fit-cover stethoscope-image',
        info: {
          title: 'Save 30% on',
          subtitle: 'Digital Electronic<br>Stethoscopes',
          link: { label: 'VISIT STORE', url: '' },
        },
      },
      smallCards: [
        {
          image: 'assets/images/product-grid/product-grid-three.png',
          alt: 'Thermometer',
          imageClass: 'object-fit-cover thermometer-image',
          info: {
            subtitle: 'Get Digital<br>Thermometers',
            align: 'end',
            link: { label: 'VISIT STORE', url: '' },
          },
        },
        {
          image: 'assets/images/product-grid/product-grid-four.png',
          alt: 'Medical Supply',
          imageClass: 'object-fit-cover medical-supply-image',
          extraClass: 'medical-supply-card',
          info: {
            subtitle: 'Essential<br>Medical<br>Supplies',
            align: 'start',
            link: { label: 'Shop Now', url: '', textLight: true },
          },
        },
      ],
    },
  };
}
