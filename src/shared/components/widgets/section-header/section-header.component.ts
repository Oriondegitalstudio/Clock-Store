import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.component.html'
})
export class SectionHeaderComponent {

  eyebrow = input<string>('');

  title = input.required<string>();

  description = input<string>('');

  actionLabel = input<string>('');

  align = input<'left' | 'center'>('left');

  actionClicked = output<void>();

  onActionClick(): void {
    this.actionClicked.emit();
  }
}