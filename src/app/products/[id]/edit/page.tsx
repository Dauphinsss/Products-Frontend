"use client";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "../../new/product-form";
import { getProduct } from "../../new/products.api";
import { useParams } from "next/navigation";

interface Params {
  id?: string;
}

export default function ProductsNewPage() {
  const params = useParams() as Params;
  const { id } = params;
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await getProduct(id);
        console.log(productData)
        setProduct(productData);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>; //
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="h-auto">
        <CardHeader>
          <CardTitle>Editar Producto</CardTitle>
          <CardDescription>
            Formulario para crear un nuevo Producto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
