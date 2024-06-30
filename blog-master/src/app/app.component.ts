import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentSets = [
    {
      currentImage: '/assets/images/h6-blog-post-img-17.jpg',
      currentDate: 'Apr 15, 2020',
      currentTitle: 'Your Trip Across Europe the Right Way',
      currentDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
      currentAuthor: 'John Doe',
      currentCategory: 'Travel, Adventure',
      currentContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
      currentQuote: 'North Atlantic island sit dolor inspiration for life is a pseudo Latin text used in web design.',
      currentArticleImage: '/assets/images/h6-blog-post-img-16-1.jpg',
      currentAdditionalContent: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
      currentAdditionalImages: [
        '/assets/images/h6-blog-post-img-17.jpg',
        '/assets/images/h6-blog-post-img-16-1.jpg'
      ]
    },
    {
      currentImage: '/images/h4-feautured-img.jpg',
      currentDate: 'Mar 20, 2020',
      currentTitle: 'Exploring the Mountains of Iceland',
      currentDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      currentAuthor: 'Jane Doe',
      currentCategory: 'Nature, Exploration',
      currentContent: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
      currentQuote: 'The beauty of Iceland lies in its untouched wilderness and breathtaking landscapes.',
      currentArticleImage: '/images/greenland-1962998_1280.jpg',
      currentAdditionalContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
      currentAdditionalImages: [
        '/images/h6-blog-post-img-16-1.jpg',
        '/images/h6-blog-post-img-17.jpg'
      ]
    }
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
