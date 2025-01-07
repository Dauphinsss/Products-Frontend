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
  const id = params.id; 

  try {
    const product = await getProduct(id);

    return (
      <div className="h-screen flex justify-center items-center">
        <Card className="h-auto">
          <CardHeader>
            <CardTitle>Editar Producto</CardTitle>
            <CardDescription>
              Formulario para editar un producto existente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProductForm product={product} />
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Error cargando el producto. Por favor, inténtalo más tarde.</p>
      </div>
    );
  }
}
