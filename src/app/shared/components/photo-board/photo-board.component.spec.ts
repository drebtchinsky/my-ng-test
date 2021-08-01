import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { buildPhotoList } from './build-photo-list';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    const change: SimpleChanges = {
      photos: new SimpleChange(null, buildPhotoList(), false),
    };
    component.ngOnChanges(change);
    fixture.detectChanges();
    expect(component.rows.length).withContext('Number of rows').toBe(2);
    expect(component.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});
