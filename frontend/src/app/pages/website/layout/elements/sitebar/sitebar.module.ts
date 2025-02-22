import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitebarComponent } from './sitebar.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SitebarComponent],
  imports: [CommonModule, RouterOutlet, RouterModule],
  exports: [SitebarComponent],
})
export class SitebarModule {}
