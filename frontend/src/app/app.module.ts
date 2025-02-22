import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Zaimportowanie AppComponent
import { SitebarModule } from './pages/website/layout/elements/sitebar/sitebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent], // Dodanie AppComponent do deklaracji
  imports: [BrowserModule, SitebarModule, RouterModule], // Importowanie innych modułów
  bootstrap: [AppComponent], // Ustawienie AppComponent jako główny komponent
})
export class AppModule {}
