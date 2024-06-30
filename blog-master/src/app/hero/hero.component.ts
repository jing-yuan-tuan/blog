import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() currentImage!: string;
  @Input() currentDate!: string;
  @Input() currentTitle!: string;
  @Input() currentDescription!: string;
  @Input() prev!: () => void;
  @Input() next!: () => void;

  constructor() { }

  ngOnInit(): void { }

  fadeOutAndChangeImage(next: boolean) {
    const imageElement = document.querySelector('.hero-image') as HTMLElement;
    if (imageElement) {
      imageElement.style.opacity = '0';
      setTimeout(() => {
        if (next) {
          this.next();
        } else {
          this.prev();
        }
        imageElement.style.opacity = '1';
      }, 500);
    }
  }

  onPrevClick() {
    this.fadeOutAndChangeImage(false);
  }

  onNextClick() {
    this.fadeOutAndChangeImage(true);
  }
}
