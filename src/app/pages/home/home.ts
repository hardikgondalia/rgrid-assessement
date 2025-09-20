import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { QuickLink } from '../../components/quick-link/quick-link';
import { BannerSection } from '../../components/banner-section/banner-section';
import { ProductGrid } from '../../components/product-grid/product-grid';
import { Product } from '../../components/product/product';
import { ProductList } from '../../components/product-list/product-list';
import { Accordion } from '../../components/accordion/accordion';
import { AddressSection } from '../../components/address-section/address-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, QuickLink, BannerSection, ProductGrid, Product, ProductList, Accordion, AddressSection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
