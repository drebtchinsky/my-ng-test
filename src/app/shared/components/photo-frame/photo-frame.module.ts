import { LikeWidgetModule } from './../like-widget/like-widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from './photo-frame.component';

@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [CommonModule, LikeWidgetModule],
  exports: [PhotoFrameComponent],
})
export class PhotoFrameModule {}
