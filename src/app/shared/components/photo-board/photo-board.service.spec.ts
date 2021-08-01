import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PhotoBoardService } from './photo-board.service';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'example 1',
      src: '',
    },
    {
      id: 2,
      description: 'example 2',
      src: '',
    },
    {
      id: 3,
      description: 'example 3',
      src: '',
    },
  ],
};

describe('PhotoBoardService', () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  const ptt = PhotoBoardService.prototype;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it(`#${ptt.getPhotos.name}
    should return photos with description in upper case`, (done) => {
    service.getPhotos().subscribe((photos) => {
      photos.forEach((photo, i) => {
        expect(photo.description)
          .withContext(`mocked photo description ${i} `)
          .toBe(photo.description.toUpperCase());
      });
      done();
    });
    httpController.expectOne(mockData.api).flush(mockData.data);
  });

  afterEach(() => httpController.verify());
});
