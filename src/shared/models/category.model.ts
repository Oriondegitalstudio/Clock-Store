export interface Category {
  id: number;
  parentId: number | null;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  status: boolean;
  sortOrder: number;
}