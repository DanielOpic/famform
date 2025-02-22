import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { SitebarComponent } from './sitebar.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SitebarComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [SitebarComponent],
})
export class SitebarModule {}
