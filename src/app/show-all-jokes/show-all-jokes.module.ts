import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ShowAllJokesComponent } from './show-all-jokes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [ShowAllJokesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    StarRatingModule,
    MatMenuModule,
  ],
  exports: [ShowAllJokesComponent],
})
export class ShowAllJokesModule {}
