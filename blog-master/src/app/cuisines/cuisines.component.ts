import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  cuisines = [
    {
      name: 'Italian',
      image: '/assets/images/italian-cuisine.jpg',
      description: 'Enjoy the rich flavors of Italy with pasta, pizza, and more.'
    },
    {
      name: 'Japanese',
      image: '/assets/images/japanese-cuisine.jpg',
      description: 'Experience the delicate tastes of sushi, sashimi, and ramen.'
    },
    {
      name: 'Indian',
      image: '/assets/images/indian-cuisine.jpg',
      description: 'Savor the spicy and aromatic dishes of Indian cuisine.'
    },
    {
      name: 'Mexican',
      image: '/assets/images/mexican-cuisine.jpg',
      description: 'Discover the vibrant and spicy street foods of Mexico.'
    },
    {
      name: 'French',
      image: '/assets/images/french-cuisine.jpg',
      description: 'Indulge in the fine dining experience of French cuisine with exquisite pastries, breads, and fine wines.'
    },
    {
      name: 'Thai',
      image: '/assets/images/thai-cuisine.jpg',
      description: 'Experience the perfect balance of spicy, sweet, salty, and sour flavors in Thai dishes.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
