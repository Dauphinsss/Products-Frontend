import { ProductCreate } from "@/app/dto/dtos";

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getProducts() {
  const data = await fetch(`${BACKEND_URL}/api/products`, {
    cache: "no-store",
  });
  return await data.json();
}
export async function getProduct(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createProduct(productData: ProductCreate) {
  const data = JSON.stringify(productData);
  console.log(data);

  const res = await fetch(`${BACKEND_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  console.log(await res.json());
}

export async function deleteProduct(id: number) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function updateProductDto(id: string, newProduct: ProductCreate) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  return await res.json();
}
