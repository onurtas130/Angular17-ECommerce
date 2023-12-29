import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { CarsState } from './NGXS(state management)/states/cars.state';

export const appConfig: ApplicationConfig = {
  providers: [
    //Modules
    importProvidersFrom(CommonModule),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(NgxsModule.forRoot([CarsState]))
  ]
};
