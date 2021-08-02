import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from 'src/app/components/photo-list/photo-list.component';
import { PhotoListModule } from 'src/app/components/photo-list/photo-list.module';
import { PhotoBoardMockService } from './photo-board-mock.service';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoListComponent.name + ' mock provider', () => {
  let fixture: ComponentFixture<PhotoListComponent> = null;
  let component: PhotoListComponent = null;
  const ptt = PhotoListComponent.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrives', () => {
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });
});
