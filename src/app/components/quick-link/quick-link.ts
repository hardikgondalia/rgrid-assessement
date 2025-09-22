import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-link',
  imports: [],
  templateUrl: './quick-link.html',
  styleUrl: './quick-link.scss',
})
export class QuickLink {
  quickLinks = [
    {
      title: '99% Customer Satisfaction',
      subtitle: 'Rated highly for quality & reliability',
      active: false,
    },
    {
      title: 'Next-Day Dispatch',
      subtitle: 'Quick, dependable shipping across the UK',
      active: false,
    },
    {
      title: 'Safe & Certified',
      subtitle: 'All products meet medical safety standards',
      active: true,
    },
  ];
}
