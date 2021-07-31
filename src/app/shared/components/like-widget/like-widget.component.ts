import { UniqueIdService } from './../../service/uniqueid/unique-id.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Output() liked = new EventEmitter<void>();
  @Input() likes = 0;
  @Input() id = null;
  fonts = {
    faThumbsUp,
  };
  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  like() {
    this.liked.emit();
  }
}
