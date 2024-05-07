import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FilterPipe } from './shared/ngx-mgmg-filter-pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), FilterPipe]
};
