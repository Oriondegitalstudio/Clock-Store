import { Component, input, output } from '@angular/core';

import { IconComponent } from '../icons/icon.component';
import { IconName } from '../icons/icons';

@Component({
    selector: 'app-icon-button',
    standalone: true,
    templateUrl: './icon-button.component.html',
    imports: [IconComponent]
})
export class IconButtonComponent {
    icon = input.required<IconName>();
    activeIcon = input<IconName>();
    active = input<boolean>(false);
    ariaLabel = input.required<string>();

    clicked = output<void>();

    currentIcon(): IconName {
        return this.active() && this.activeIcon()
            ? this.activeIcon()!
            : this.icon();
    }

    onClick(event: Event): void {
        event.stopPropagation();
        this.clicked.emit();
    }
}