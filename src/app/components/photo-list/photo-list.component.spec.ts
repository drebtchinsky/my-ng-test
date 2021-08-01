import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { buildPhotoList } from 'src/app/shared/components/photo-board/build-photo-list';
import { PhotoBoardService } from './../../shared/components/photo-board/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent> = null;
  let component: PhotoListComponent = null;
  let service: PhotoBoardService;
  const ptt = PhotoListComponent.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrives', () => {
    const photos = buildPhotoList();

    spyOn(service, 'getPhotos').and.returnValue(of(photos));

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });

  it('(D) Should display loader while waiting for data', () => {
    spyOn(service, 'getPhotos').and.returnValue(null);

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should display loader').not.toBeNull();
  });
});
