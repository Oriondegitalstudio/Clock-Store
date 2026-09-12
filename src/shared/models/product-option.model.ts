import { ProductOptionValue } from "./product-option-value.model";

export interface ProductOption {
  id: number;
  productId: number;
  name: string;
  values: ProductOptionValue[];
}