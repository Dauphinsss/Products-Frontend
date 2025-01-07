import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getProducts } from "./products/new/products.api";
import ProductCard from "@/components/product-card";
import { Product } from "./dto/dtos";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <div className="flex justify-between pb-4">
        <h1 className="font-bold text-3xl">NEST & NEXT</h1>
        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>
      <div className="grid sm:grid-cols-4 gap-3 m-5">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
