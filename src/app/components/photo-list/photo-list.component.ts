import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Photo } from 'src/app/shared/components/photo-board/photo-board';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/photo-board.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>;
  fa = {
    faCircleNotch,
  };

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
