import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductSlider } from "../product-slider/product-slider";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
  imports: [ProductSlider],
})
export class ProductGrid {
  
}
