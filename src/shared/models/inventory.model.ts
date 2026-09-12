export interface Inventory {
  id: number;
  variantId: number;
  quantity: number;
  reserved: number;
  available: number;
  lowStockThreshold: number;
  warehouseLocation: string | null;
}