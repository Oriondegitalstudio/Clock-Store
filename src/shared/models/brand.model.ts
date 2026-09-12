export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  logo: string | null;
  website: string | null;
  status: boolean;
}