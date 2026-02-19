import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionArrowForwardOutline,
  ionCheckmarkDoneCircleSharp,
  ionDocumentLock,
  ionRocket,
} from '@ng-icons/ionicons';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NgIcon],
  providers: [
    provideIcons({
      ionRocket,
      ionCheckmarkDoneCircleSharp,
      ionDocumentLock,
      ionArrowForwardOutline,
    }),
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  navigateAndScroll() {
    this.router.navigate(['/can-activate-child']).then(() => {
      document.getElementById('guards')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
