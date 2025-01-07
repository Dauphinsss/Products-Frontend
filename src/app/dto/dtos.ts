export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductCreate {
  name: string;
  price: number;
  description: string;
  image: string;
}