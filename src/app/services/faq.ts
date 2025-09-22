import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Faq {
  faqData = [
    {
      idPrefix: 'One',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept major credit and debit cards, PayPal, and secure online banking options to ensure your transactions are safe and convenient.',
        },
        {
          question: 'How long does delivery take?',
          answer:
            'Orders placed before 3 PM are dispatched the same day, with most UK deliveries arriving within 1–2 business days.',
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes! We provide free shipping on orders over $59 or with your first purchase.',
        },
      ],
    },
    {
      idPrefix: 'Two',
      questions: [
        {
          question: 'Are your products certified?',
          answer:
            'All our medical and wellness products meet the required safety and certification standards, ensuring reliability and quality.',
        },
        {
          question: 'What is your return policy?',
          answer:
            'We offer a 30-day hassle-free return policy for unused items in their original packaging.',
        },
        {
          question: 'How can I contact customer support?',
          answer:
            'Our support team is available 24/7 via email, phone, or live chat to assist with any questions or concerns.',
        },
      ],
    },
  ];
}
