export interface ProductVariant {
  id: number;
  productId: number;
  sku: string;
  barcode: string | null;
  status: boolean;
}