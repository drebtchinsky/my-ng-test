import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from 'src/app/shared/components/photo-board/build-photo-list';
import { Photo } from './photo-board';
import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
