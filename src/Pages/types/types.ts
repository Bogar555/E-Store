export interface Product {
  id: number;
  name: string;
  price: string; 
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: number;
  items: CartItem[];
  date: string;
  status: string;
}

export interface User {
  id: string;
  username: string;
  role: "admin" | "customer";
}