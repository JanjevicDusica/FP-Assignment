import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.css'],
})
export class HeartButtonComponent implements OnInit {
  @Output()
  public likeChanged = new EventEmitter<boolean>();
  public liked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public onLikeJoke(): void {
    this.liked = !this.liked;
    this.likeChanged.emit(this.liked);
  }
}
