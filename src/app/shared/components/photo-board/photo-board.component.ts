import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PhotoBoard } from './photo-board';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  private readonly colNumber = 4;

  @Input() photos: PhotoBoard;

  rows: PhotoBoard[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos.currentValue) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: PhotoBoard): any[][] {
    const newRows = [];

    for (let index = 0; index < photos.length; index += this.colNumber) {
      newRows.push(photos.slice(index, index + this.colNumber));
    }

    return newRows;
  }
}
