import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contentSets = [
    {
      currentImage: 'assets/images/doggo.jpeg',
      currentDate: 'Mar 10, 2023',
      currentTitle: 'The Rise of Artificial Intelligence',
      currentDescription: 'Discover how AI is transforming industries across the world.',
      currentCategory: 'Technology, AI',
      currentContent: 'Artificial Intelligence has rapidly evolved over the past decade, reshaping industries...',
      currentQuote: 'AI will be the defining technology of the 21st century, changing how we work and live.',
      currentArticleImage: 'assets/images/doggo.jpeg',
      currentAdditionalContent: 'Explore how AI is powering innovations such as self-driving cars...',
      currentAdditionalImages: ['assets/images/doggo.jpeg', 'assets/images/doggo.jpeg']
    },
    {
      currentImage: 'assets/images/doggo.jpeg',
      currentDate: 'Apr 5, 2023',
      currentTitle: 'Cloud Computing: The Backbone of Modern Technology',
      currentDescription: 'How cloud computing is changing the way businesses operate.',
      currentCategory: 'Technology, Cloud Computing',
      currentContent: 'Cloud computing has become the backbone of modern technology...',
      currentQuote: 'Cloud computing is not just a technology—it\'s a game-changer for businesses of all sizes.',
      currentArticleImage: 'assets/images/doggo.jpeg',
      currentAdditionalContent: 'Explore the major cloud service providers, their services, and how cloud computing...',
      currentAdditionalImages: ['assets/images/doggo.jpeg', 'assets/images/doggo.jpeg']
    },
    {
      currentImage: 'assets/images/doggo.jpeg',
      currentDate: 'Jul 22, 2022',
      currentTitle: 'The Internet of Things (IoT): Connecting the World',
      currentDescription: 'Learn about the Internet of Things and how it\'s reshaping our everyday lives.',
      currentCategory: 'Technology, IoT',
      currentContent: 'The Internet of Things (IoT) is all about connecting physical devices to the internet...',
      currentQuote: 'IoT is the bridge between digital and physical worlds, creating a smart, interconnected system.',
      currentArticleImage: 'assets/images/doggo.jpeg',
      currentAdditionalContent: 'Discover how IoT is being used in various sectors, from healthcare and agriculture...',
      currentAdditionalImages: ['assets/images/doggo.jpeg', 'assets/images/doggo.jpeg']
    },
    {
      currentImage: 'assets/images/doggo.jpeg',
      currentDate: 'Feb 18, 2023',
      currentTitle: 'Virtual Reality: The Future of Immersive Experiences',
      currentDescription: 'Explore the impact of Virtual Reality on gaming, education, and more.',
      currentCategory: 'Technology, Virtual Reality',
      currentContent: 'Virtual Reality (VR) technology has been steadily advancing, providing users with new experiences...',
      currentQuote: 'VR is redefining what is possible in education, gaming, and entertainment.',
      currentArticleImage: 'assets/images/doggo.jpeg',
      currentAdditionalContent: 'Learn about the most popular VR devices and the companies driving the VR industry...',
      currentAdditionalImages: ['assets/images/doggo.jpeg', 'assets/images/doggo.jpeg']
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
