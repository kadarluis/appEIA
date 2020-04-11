import { NgModule } from '@angular/core';
import { PAGE_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PagesComponent,
        NopagefoundComponent,
        DashboardComponent,
        IncrementadorComponent
      ],
     exports: [
         PagesComponent,
         NopagefoundComponent,
         DashboardComponent
     ],
     imports: [
         SharedModule,
         PAGE_ROUTES,
         FormsModule
     ]

})

export class PagesModule { }
