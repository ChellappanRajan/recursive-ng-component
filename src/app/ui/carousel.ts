import { Component, Input, WritableSignal, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class CarouselComponent {
  @Input() images: { src: string; caption: string }[] = [];
  activeIndex: WritableSignal<number> = signal(0);

  next() {
    this.activeIndex.update(idx => (idx + 1) % this.images.length);
  }

  prev() {
    this.activeIndex.update(idx => (idx - 1 + this.images.length) % this.images.length);
  }

  trackBySrc(index: number, item: { src: string }) {
    return item.src;
  }
}
