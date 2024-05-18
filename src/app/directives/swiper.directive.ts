import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Directive({
  selector: '[appSwiper]',
})
export class SwiperDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.el.nativeElement, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      // Add pagination and navigation options if needed
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
