import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class DetailsModule {
 }