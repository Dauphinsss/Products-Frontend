"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProduct, updateProductDto } from "./products.api";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/app/dto/dtos";

interface Props {
  product?: Product;
}
interface CreatedProduct {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductForm({ product }: Props) {
  const params = useParams<{ id: string }>();

  console.log(params);
  const { register, handleSubmit } = useForm<CreatedProduct>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price ? product.price.toString() : "",
      image: product?.image,
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const productData = { ...data, price: parseFloat(data.price) };
    if (params?.id) {
      try {
        await updateProductDto(params.id, productData);
      } catch (error) {
        console.error("Error creating product:", error);
      }
    } else {
      try {
        await createProduct(productData);
      } catch (error) {
        console.error("Error creating product:", error);
      }
    }
    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            placeholder="Nombre del producto"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            placeholder="Descripción del producto"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="price">Precio</Label>
          <Input
            id="price"
            placeholder="Precio del producto"
            {...register("price")}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="image">Imagen</Label>
          <Input
            id="image"
            placeholder="URL de la imagen"
            {...register("image")}
          />
        </div>
      </div>
      <CardFooter className="flex justify-end mt-4">
        <Button type="submit">{params ? "Editar" : "Crear"}</Button>
      </CardFooter>
    </form>
  );
}
