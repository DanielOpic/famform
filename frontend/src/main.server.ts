import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient } from '@angular/common/http';

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [...config.providers, provideHttpClient()],
  }).then((appRef) => {
    if (!appRef) {
      throw new Error('Bootstrap failed');
    }
    return appRef;
  });

export default bootstrap;
