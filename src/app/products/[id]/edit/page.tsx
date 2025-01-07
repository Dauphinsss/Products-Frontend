import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "../../new/product-form";
import { getProduct } from "../../new/products.api";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductsNewPage({ params }: Props) {
  console.log(params.id);
  const product = await getProduct(params.id)
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
          <ProductForm product={product}/>
        </CardContent>
      </Card>
    </div>
  );
}
