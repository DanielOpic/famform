import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styleUrl: './sitebar.component.scss',
})
export class SitebarComponent {
  isSidebarOpen = false; // Zmienna kontrolująca stan sidebaru

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
