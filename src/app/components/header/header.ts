import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  logo = {
    src: 'assets/images/logo.svg',
    title: 'medmart',
    highlight: '.',
  };

  navItems = [
    { label: 'Home', link: '#', active: true },
    { label: 'About', link: '#' },
    {
      label: 'Collections',
      dropdown: true,
      children: [
        { label: 'Medications', link: '#' },
        { label: 'Stethoscopes', link: '#' },
        { label: 'Thermometers', link: '#' },
        { label: 'Medical Supplies', link: '#' },
      ],
    },
    { label: 'Shop', link: '#' },
    { label: 'Contact', link: '#' },
  ];

  navIcons = [
    { src: 'assets/images/header/search.svg', link: '#', width: 32, height: 34, label: 'Search' },
    { src: 'assets/images/header/user.svg', link: '#', width: 32, height: 34, label: 'User' },
    {
      src: 'assets/images/header/add-to-cart.svg',
      link: '#',
      width: 32,
      height: 34,
      badge: '03',
      label: 'Cart',
    },
  ];
}
