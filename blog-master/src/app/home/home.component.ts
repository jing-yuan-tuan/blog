import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contentSets = [
    {
      currentImage: '/assets/images/mountains.jpg',
      currentDate: 'Mar 20, 2020',
      currentTitle: 'Exploring the Mountains of Iceland',
      currentDescription: 'Experience the beauty of the untouched wilderness in Iceland.',
      currentAuthor: 'Jing Yuan Tuan',
      currentCategory: 'Nature, Exploration',
      currentContent: 'Exploring the rugged terrain of Iceland is a once-in-a-lifetime opportunity. The vast landscapes and breathtaking views make it an unforgettable journey.',
      currentQuote: 'The beauty of Iceland lies in its untouched wilderness and breathtaking landscapes.',
      currentArticleImage: '/assets/images/iceland.jpg',
      currentAdditionalContent: 'From glaciers to volcanic hot springs, Iceland offers a unique variety of natural attractions.',
      currentAdditionalImages: ['/assets/images/landscape1.jpg', '/assets/images/landscape2.jpg']
    },
    {
      currentImage: '/assets/images/europe.jpg',
      currentDate: 'Apr 15, 2021',
      currentTitle: 'Your Trip Across Europe the Right Way',
      currentDescription: 'Travel across Europe and explore historical wonders.',
      currentAuthor: 'Jing Yuan Tuan',
      currentCategory: 'Travel, Adventure',
      currentContent: 'Europe is a diverse continent with so much to explore, from iconic cities to quaint villages.',
      currentQuote: 'Traveling across Europe gives you a taste of culture, history, and adventure.',
      currentArticleImage: '/assets/images/europe-trip.jpg',
      currentAdditionalContent: 'Discover famous landmarks, sample incredible food, and meet people from all walks of life.',
      currentAdditionalImages: ['/assets/images/europe1.jpg', '/assets/images/europe2.jpg']
    },
    {
      currentImage: '/assets/images/food.jpg',
      currentDate: 'May 5, 2019',
      currentTitle: 'A Taste of Italy: Culinary Journey',
      currentDescription: 'Experience the culinary delights of Italy.',
      currentAuthor: 'Jing Yuan Tuan',
      currentCategory: 'Food, Cuisine',
      currentContent: 'Italian cuisine is world-renowned for its rich flavors and comforting dishes. From pasta to pizza, each dish has its own story.',
      currentQuote: 'Good food brings people together and makes every experience special.',
      currentArticleImage: '/assets/images/italian-food.jpg',
      currentAdditionalContent: 'Join us on a journey through Italy\'s iconic culinary scene, savoring authentic flavors.',
      currentAdditionalImages: ['/assets/images/food1.jpg', '/assets/images/food2.jpg']
    }
    // Add more content as needed
  ];

  currentIndex = 0;

  get currentContentSet() {
    return this.contentSets[this.currentIndex];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.contentSets.length) % this.contentSets.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.contentSets.length;
  }
}
