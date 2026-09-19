import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CustomButtonComponent } from '../../../../shared/components/widgets/custom_button/custom_button.component';
import { CustomTitleComponent } from '../../../../shared/components/widgets/custom_title/custom_title.component';
import { apiPath } from '../../../../shared/enum/ApiPath';
import { imagePath } from '../../../../shared/enum/imagePath';

@Component({
    selector: 'app-hero',
    imports: [CustomTitleComponent, CustomButtonComponent, RouterLink,TranslatePipe],
    standalone: true,
	templateUrl: './hero.component.html'
})
export class HeroComponent {
    readonly imagePath = imagePath;
    readonly apiPath = apiPath;
}
