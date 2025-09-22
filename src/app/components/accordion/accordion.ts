import { Component, inject } from '@angular/core';
import { Faq } from '../../services/faq';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  private readonly faqService = inject(Faq);
  faqData = this.faqService.faqData;
}
