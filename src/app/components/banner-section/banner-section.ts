import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  imports: [CommonModule],
  templateUrl: './banner-section.html',
  styleUrl: './banner-section.scss',
})
export class BannerSection {
  bannerData = {
    block: {
      image: {
        src: 'assets/images/banner/chat.svg',
        alt: 'chat',
        class: 'chat-image',
      },
      title: 'Trusted by Thousands of Health Professionals & Households',
    },
    brands: [
      {
        images: [
          {
            src: 'assets/images/banner/trustpilot-logo.svg',
            alt: 'Trustpilot Logo',
            class: 'trustpilot-image',
          },
          {
            src: 'assets/images/banner/trustpilot-stars.svg',
            alt: 'Trustpilot Stars',
            class: 'trustpilot-star-image',
          },
        ],
      },
      {
        images: [
          { src: 'assets/images/banner/google.svg', alt: 'Google Logo', class: 'google-image' },
          {
            src: 'assets/images/banner/goggle-star.svg',
            alt: 'Google Stars',
            class: 'google-star-image',
          },
        ],
        alignCenter: true,
      },
    ],
  };
}
