"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/app/dto/dtos";
import { deleteProduct } from "@/app/products/new/products.api";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  async function handleRemoveProduct(id: number) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent
        onClick={() => {
          router.push(`/products/${product.id}`);
        }}
      >
        <p>{product.description}</p>
        <img
          src={product.image}
          alt={product.name}
          className="h-2/4 object-cover rounded-md"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => {
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => handleRemoveProduct(product.id)}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}
