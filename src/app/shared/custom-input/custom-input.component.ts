import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() pattern: string = '';
  @Input() maxlength: number | undefined;
  @Input() minlength: number | undefined;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
}
