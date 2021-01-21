import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartButtonComponent } from './heart-button.component';

@NgModule({
  declarations: [HeartButtonComponent],
  imports: [CommonModule],
  exports: [HeartButtonComponent],
})
export class HeartButtonModule {}
