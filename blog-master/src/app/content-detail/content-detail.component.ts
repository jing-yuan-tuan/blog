import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent {
  @Input() contentSet: any;
}
