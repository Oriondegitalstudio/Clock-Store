import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  standalone: true,
  templateUrl: './custom_title.component.html',
})
export class CustomTitleComponent {

  eyebrow = input<string>('');
  title = input.required<string>();
  description = input<string>('');

  align = input<'left' | 'center'>('center');

  titleSize = input<'sm' | 'md' | 'lg' | 'xl'>('lg');

  eyebrowColor = input<'gold' | 'black' | 'muted'>('gold');
}