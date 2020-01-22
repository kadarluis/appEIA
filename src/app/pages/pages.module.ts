import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        PagesComponent,
        NopagefoundComponent,
        DashboardComponent
      ],
     exports: [
         PagesComponent,
         NopagefoundComponent,
         DashboardComponent
     ],
     imports: [
         SharedModule
     ]

})

export class PagesModule { }
