import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  heroData = {
    title: 'SINCE 2014',
    mainImage: {
      src: 'assets/images/hero-section/store.png',
      alt: 'store',
      class: 'hero-image',
    },
    overlayImages: [
      {
        src: 'assets/images/hero-section/medicines.svg',
        alt: 'medicines',
        class: 'tablet-image updown',
      },
    ],
    buttons: [
      { label: 'Shop Essentials', class: 'shop-button', link: '#' },
      { label: 'About Medmart', class: 'about-button', link: '#' },
    ],
    floatingImages: [
      {
        src: 'assets/images/hero-section/Vaccine.svg',
        alt: 'vaccine',
        class: 'vaccine-image',
      },
      {
        src: 'assets/images/hero-section/mask.svg',
        alt: 'mask',
        class: 'mask-image updown',
      },
      {
        src: 'assets/images/hero-section/senitizer-bottel.svg',
        alt: 'sanitizer bottle',
        class: 'senitizer-bottel-image',
      },
    ],
  };
}
