import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideFormlyCore } from '@ngx-formly/core'
import { withFormlyBootstrap } from '@ngx-formly/bootstrap';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideFormlyCore(withFormlyBootstrap())]
};
