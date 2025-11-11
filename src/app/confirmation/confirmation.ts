import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {
  total: string = '';
  fullName: string = '';

  constructor(private router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras.state) {
      this.total = navigation.extras.state['total'] || '';
      this.fullName = navigation.extras.state['fullName'] || '';
    }
  }
}
