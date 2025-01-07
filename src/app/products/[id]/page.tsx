"use client";
import React, { useEffect, useState } from "react";
import { getProduct } from "../new/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/app/dto/dtos";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useParams } from "next/navigation";

interface Params {
  id?: string;
}

export default function ProductDetail() {
  const params = useParams() as Params;
  const { id } = params;
  console.log(id);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await getProduct(id);
        console.log(productData);
        setProduct(productData);
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Product Detail: {product?.id || "Loading..."}
            <Link href="/" className={buttonVariants()}>
              Go back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {product ? (
            <>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <img src={product.image} className="object-contain w-96 m-5" />
            </>
          ) : (
            <p>Loading product...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
