import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private readonly productService = inject(Product);
  products = this.productService.productCards;
  visibleProducts: any[] = [];
  initialLoad = 0;
  loadMoreCount = 0;

  ngOnInit(): void {
    this.setDisplayCounts(window.innerWidth);
    this.visibleProducts = this.products.slice(0, this.initialLoad);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setDisplayCounts(event.target.innerWidth);
  }

  setDisplayCounts(width: number) {
    if (width >= 1200) {
      // Desktop
      this.initialLoad = 8;
      this.loadMoreCount = 4;
    } else if (width >= 768) {
      // Tablet
      this.initialLoad = 6;
      this.loadMoreCount = 3;
    } else {
      // Mobile
      this.initialLoad = 4;
      this.loadMoreCount = 2;
    }
  }

  viewMore() {
    const currentLength = this.visibleProducts.length;
    const nextProducts = this.products.slice(currentLength, currentLength + this.loadMoreCount);
    this.visibleProducts = [...this.visibleProducts, ...nextProducts];
  }
}
