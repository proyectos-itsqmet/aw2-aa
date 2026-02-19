import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroShieldCheckSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-footer',
  imports: [NgIcon],
  providers: [provideIcons({ heroShieldCheckSolid })],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  host: { class: 'mt-auto block' },
})
export class Footer {}
