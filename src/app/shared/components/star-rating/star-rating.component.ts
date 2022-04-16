import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `<ol>
  <li *ngFor="let star of stars" class="star" [ngClass]="{ active: star.active }"></li>
  <span> {{rating}} de {{maxRating}}</span>
</ol>`,
  styleUrls: ['./star-rating.component.less']
})
export class StarRatingComponent implements OnChanges, OnInit {

  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  stars: { active: boolean }[] = [];
  constructor() { }
  ngOnInit(): void {
    this.stars = Array(this.maxRating).fill({}).map((_, i) => ({
      active: i < this.rating
    }));
  }
  ngOnChanges(): void {
    this.stars = Array(this.maxRating).fill({}).map((_, i) => ({
      active: i < this.rating
    }));

  }
}
