import { ProductStatus } from '../enum/product-status.enum';
import { ProductVisibility } from '../enum/product-visibility.enum';
import { ProductPricing } from './product-pricing.model';
import { ProductImage } from './ProductImage.model';

export interface Product {

  id: number;

  name: string;

  slug: string;

  sku: string;

  barcode: string | null;

  brandId: number;

  brandName: string;

  categoryId: number;

  categoryName: string;

  shortDescription: string | null;

  description: string | null;

  weight: number | null;

  warranty: string | null;

  status: ProductStatus;

  visibility: ProductVisibility;

  featured: boolean;

  createdAt: string;

  updatedAt: string;

  images: ProductImage[];

  pricing: ProductPricing[];
}