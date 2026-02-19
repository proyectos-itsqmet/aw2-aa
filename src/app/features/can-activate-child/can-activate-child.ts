import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionLockClosed,
  ionLayersSharp,
  ionGitCompare,
  ionAnalytics,
  ionShieldCheckmark,
  ionList,
  ionCheckmarkCircle,
  ionCloseCircle,
  ionCode,
  ionAlertCircle,
} from '@ng-icons/ionicons';
import { lucideUser, lucideUserX } from '@ng-icons/lucide';

@Component({
  selector: 'app-can-activate-child',
  imports: [NgIcon],
  providers: [
    provideIcons({
      ionLockClosed,
      ionLayersSharp,
      ionGitCompare,
      ionAnalytics,
      ionShieldCheckmark,
      ionList,
      ionCheckmarkCircle,
      ionCloseCircle,
      ionCode,
      lucideUser,
      lucideUserX,
      ionAlertCircle,
    }),
  ],
  templateUrl: './can-activate-child.html',
  styleUrl: './can-activate-child.css',
})
export class CanActivateChild {}
