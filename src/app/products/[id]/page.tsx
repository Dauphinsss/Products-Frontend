import React from "react";
import { getProduct } from "../new/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/app/dto/dtos";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const product: Product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Product Detail: {product.id}
            <Link href="/" className={buttonVariants()}>
              Go back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} className="object-contain w-96 m-5" />
        </CardContent>
      </Card>
    </div>
  );
}
