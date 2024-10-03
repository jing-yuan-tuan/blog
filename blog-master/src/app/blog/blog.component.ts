import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      image: '/assets/images/doggo.jpeg',
      author: 'John Doe',
      date: '12/06/2020 10:30',
      views: 114,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
