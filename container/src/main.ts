import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as singleSpa from 'single-spa';

if (environment.production) {
  enableProdMode();
}

singleSpa.start();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
