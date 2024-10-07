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

  constructor() {}

  ngOnInit(): void {}

  onPrevClick() {
    this.prev();
  }

  onNextClick() {
    this.next();
  }
}
