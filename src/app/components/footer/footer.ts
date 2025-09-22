import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerData = {
    companyInfo: {
      logo: 'assets/images/logo.svg',
      brand: 'medmart.',
      description:
        'Medmart is an online medical service and medicine wooCommerce Template for your ultimate online store and medical service.',
      contacts: [
        {
          icon: 'assets/images/footer/address.svg',
          title: '16 Collins Street West Victoria, London',
        },
        { icon: 'assets/images/footer/mail.svg', title: 'yourmail@gmail.com' },
        { icon: 'assets/images/footer/call.svg', title: '+88022 533 655' },
      ],
    },
    products: [
      { label: 'Medicines', link: '#' },
      { label: 'Vitamins & Supplements', link: '#' },
      { label: 'Accessories', link: '#' },
      { label: 'Medical Equipment', link: '#' },
      { label: 'All Products', link: '#' },
      { label: 'Doctor Equipment', link: '#' },
      { label: 'Offer Sale', link: '#' },
    ],
    quickLinks: [
      { label: 'Support', link: '#' },
      { label: 'Refund Policy', link: '#' },
      { label: 'Shipping & Returns', link: '#' },
      { label: 'Terms & Condition', link: '#' },
      { label: 'Help Center', link: '#' },
    ],
    payments: {
      title: 'Secure Payments',
      icons: [
        { src: 'assets/images/footer/visa.svg', alt: 'Visa' },
        { src: 'assets/images/footer/master-card.svg', alt: 'MasterCard' },
        { src: 'assets/images/footer/amex.svg', alt: 'Amex' },
        { src: 'assets/images/footer/card.svg', alt: 'Card' },
        { src: 'assets/images/footer/paypal.svg', alt: 'PayPal', extraClass: 'paypal-icon' },
      ],
    },
    socialLinks: [
      { src: 'assets/images/footer/facebook.svg', alt: 'Facebook', link: '#' },
      { src: 'assets/images/footer/twitter.svg', alt: 'Twitter', link: '#' },
      { src: 'assets/images/footer/instagram.svg', alt: 'Instagram', link: '#' },
      { src: 'assets/images/footer/pinterest.svg', alt: 'Pinterest', link: '#' },
    ],
    bottomBar: {
      text: '©Copyright 2025 Medmart. All Rights Reserved.',
    },
  };
}
