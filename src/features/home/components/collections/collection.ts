import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";
import { CustomButtonComponent } from "../../../../shared/components/widgets/custom_button/custom_button.component";
import { CustomTitleComponent } from "../../../../shared/components/widgets/custom_title/custom_title.component";
import { ProductCardComponent } from "../../../../shared/components/widgets/product-card/product-card.component";
import { Product } from "../../../../shared/models/product.model";
@Component({
    selector: 'app-collection',
    imports: [CustomTitleComponent, CustomButtonComponent, RouterLink, TranslatePipe, ProductCardComponent],
    standalone: true,
    templateUrl: './collection.html'
})
export class collection {
    ProductList: Product[] = [];
    
}