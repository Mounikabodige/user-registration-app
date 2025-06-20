import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers : [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
  ]
}). catch( err => console.log(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
