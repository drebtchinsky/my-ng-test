import { UniqueIdService } from './../../service/uniqueid/unique-id.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionModule } from '../../directives/action/action.module';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule, ActionModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
