import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Currency } from '../../../enum/currency.enum';
import { ProductPricing } from '../../../models/product-pricing.model';
import { Product } from '../../../models/product.model';
import { ProductImage } from '../../../models/ProductImage.model';
import { CustomButtonComponent } from '../custom_button/custom_button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ICONS } from '../icons/icons';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
    imports: [CustomButtonComponent, DecimalPipe, IconButtonComponent]
})
export class ProductCardComponent {
  product = input.required<Product>();
  currency = input<Currency>(Currency.TND);
  favorite = input<boolean>(false);
  productClicked = output<Product>();
  favoriteClicked = output<Product>();
  addToCartClicked = output<Product>();
  readonly icons = ICONS;
  get primaryImage(): ProductImage | null {
    const images = this.product().images;
    if (!images?.length) {
      return null;
    }
    return (
      images.find(image => image.isPrimary) ??
      [...images].sort((a, b) => a.sortOrder - b.sortOrder)[0]
    );
  }
  get imageUrl(): string {
    return this.primaryImage?.imageUrl ?? 'assets/images/watch.webp';
  }

  get currentPricing(): ProductPricing | null {
    const pricing = this.product().pricing;
    if (!pricing?.length) {
      return null;
    }
    const now = new Date();
    const activePricing = pricing.find(item =>
      item.currency === this.currency() &&
      this.isPricingActive(item, now)
    );

    if (activePricing) {
      return activePricing;
    }
    return (
      pricing.find(item => item.currency === this.currency()) ??
      pricing[0]
    );
  }
  get hasSale(): boolean {
    const pricing = this.currentPricing;
    if (!pricing || pricing.salePrice === null) {
      return false;
    }
    return pricing.salePrice < pricing.price;
  }

  get displayPrice(): number | null {
    const pricing = this.currentPricing;
    if (!pricing) {
      return null;
    }
    return this.hasSale
      ? pricing.salePrice
      : pricing.price;
  }
  get originalPrice(): number | null {
    const pricing = this.currentPricing;
    if (!pricing || !this.hasSale) {
      return null;
    }
    return pricing.price;
  }


  private isPricingActive(
    pricing: ProductPricing,
    now: Date
  ): boolean {

    const startDate = pricing.startDate
      ? new Date(pricing.startDate)
      : null;

    const endDate = pricing.endDate
      ? new Date(pricing.endDate)
      : null;

    if (startDate && now < startDate) {
      return false;
    }

    if (endDate && now > endDate) {
      return false;
    }

    return true;
  }


  onProductClick(): void {
    this.productClicked.emit(this.product());
  }


onFavoriteClick(): void {
    this.favoriteClicked.emit(this.product());
}
onAddToCart(): void {
    this.addToCartClicked.emit(this.product());
}
}