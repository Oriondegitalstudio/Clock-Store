import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  templateUrl: './custom_button.component.html',
})
export class CustomButtonComponent {

  label = input.required<string>();

  variant = input<'primary' | 'secondary' | 'text'>('primary');

  size = input<'sm' | 'md' | 'lg'>('md');

  type = input<'button' | 'submit'>('button');

  disabled = input<boolean>(false);

  icon = input<string>('');

  iconPosition = input<'left' | 'right'>('right');

  fullWidth = input<boolean>(false);

  clicked = output<void>();

  onClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}