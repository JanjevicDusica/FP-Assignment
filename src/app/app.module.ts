import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeartButtonModule } from './heart-button/heart-button.module';
import { ShowAllBtnModule } from './show-all-btn/show-all-btn.module';
import { ShowAllJokesModule } from './show-all-jokes/show-all-jokes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeartButtonModule,
    ShowAllBtnModule,
    ShowAllJokesModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
