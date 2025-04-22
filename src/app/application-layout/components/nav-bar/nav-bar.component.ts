import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../../../shared/models/nav-item';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.navItems = [
      {
        label: 'Home',
        url: '/',
        iconClass: PrimeIcons.HOME,
        action: () => {
          console.log('navigating to home');
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Courses',
        url: '/courses',
        iconClass: PrimeIcons.ADDRESS_BOOK,
        action: () => {
          console.log('navigating to courses');
          this.router.navigate(['/courses']);
        },
      },
      {
        label: 'Enrollments',
        url: '/enrollments',
        iconClass: PrimeIcons.ADDRESS_BOOK,
        action: () => {
          console.log('navigating to about');
          this.router.navigate(['/enrollments']);
        },
      },
    ];
  }
}
