
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CrisesRoutingModule } from './crises-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';


@NgModule({
  imports: [
    CrisesRoutingModule,
    SharedModule
  ],
  declarations: [CrisisListComponent, CrisisDetailsComponent],
  
})
export class CrisesModule { }
