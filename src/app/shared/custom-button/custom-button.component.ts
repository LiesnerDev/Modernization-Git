import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }
}
