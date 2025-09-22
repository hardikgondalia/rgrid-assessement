import { Component } from '@angular/core';

@Component({
  selector: 'app-address-section',
  imports: [],
  templateUrl: './address-section.html',
  styleUrl: './address-section.scss',
})
export class AddressSection {
  addresses = [
    {
      image: 'assets/images/address-section/shipping.svg',
      title: 'Free Shipping',
      subtitle: 'Free Shipping on Orders Over $59 or with Your First Purchase',
    },
    {
      image: 'assets/images/address-section/policy.svg',
      title: '30 Days Return policy',
      subtitle: 'Hassle-free refunds for any issues with the orders',
    },
    {
      image: 'assets/images/address-section/support.svg',
      title: '24/7 Support',
      subtitle: 'Our dedicated team is always here to help',
    },
  ];
}
