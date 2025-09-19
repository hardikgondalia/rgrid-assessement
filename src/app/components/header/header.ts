import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { QuickLink } from "./quick-link/quick-link";
import { BannerSection } from "./banner-section/banner-section";
import { ProductGrid } from "./product-grid/product-grid";
import { Product } from "./product/product";

@Component({
  selector: 'app-header',
  imports: [HeroSection, QuickLink, BannerSection, ProductGrid, Product],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
