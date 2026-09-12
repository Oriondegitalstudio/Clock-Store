import { Component, input } from '@angular/core';
import { IconName } from './icons';

@Component({
    selector: 'app-icon',
    standalone: true,
    templateUrl: './icon.component.html'
})
export class IconComponent {
    name = input.required<IconName>();
    size = input<string>('24');
    strokeWidth = input<string>('1.5');
}