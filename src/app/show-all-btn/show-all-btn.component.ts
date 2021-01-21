import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
const SHOW_JOKES_TITLE: string = 'Show my favourite jokes';
const GO_BACK_TITLE: string = 'Go back';

@Component({
  selector: 'app-show-all-btn',
  templateUrl: './show-all-btn.component.html',
  styleUrls: ['./show-all-btn.component.css'],
})
export class ShowAllBtnComponent implements OnInit {
  public showAllJokesTitle: string = SHOW_JOKES_TITLE;
  public showAllJokes: boolean = false;
  @Output()
  public showAllJokesOutput: EventEmitter<boolean> = new EventEmitter<false>();

  constructor() {}

  ngOnInit(): void {}

  private changeTitleName(title: string): string {
    return title === SHOW_JOKES_TITLE ? GO_BACK_TITLE : SHOW_JOKES_TITLE;
  }

  public onButtonClick(): void {
    this.showAllJokesTitle = this.changeTitleName(this.showAllJokesTitle);
    this.showAllJokes = !this.showAllJokes;
    this.showAllJokesOutput.emit(this.showAllJokes);
  }
}
