import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  revenues = [
    {
      icon: '../../assets/bag.png',
      sum: '$50,000',
      text: 'Total revenue',
      color: '',
    },
    {
      icon: '../../assets/basket.png',
      sum: '$1,250',
      text: 'Revenue',
      color: '',
    },
  ];
}
