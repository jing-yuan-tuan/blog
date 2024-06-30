import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts = [
    {
      image: '/images/books.jpg',
      author: 'John Doe',
      date: '12/06/2020 10:30',
      views: 114,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/images/books.jpg',
      author: 'John Doe',
      date: '12/06/2020 10:30',
      views: 114,
      title: 'Tempora molestiae, iste, consequatur unde sint praesentium!'
    },
    {
      image: '/images/books.jpg',
      author: 'John Doe',
      date: '12/06/2020 10:30',
      views: 114,
      title: 'A voluptates ratione, error provident distinctio, eaque id officia?'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
