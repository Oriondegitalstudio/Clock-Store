import { Currency } from "../enum/currency.enum";

export interface ProductPricing {
  id: number;
  variantId: number;
  variantSku: string;
  currency: Currency;
  price: number;
  salePrice: number | null;
  startDate: string | null;
  endDate: string | null;
}