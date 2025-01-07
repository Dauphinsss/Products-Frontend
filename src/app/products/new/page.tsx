import * as React from "react";
import ProductForm from "./product-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsNewPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="h-auto">
        <CardHeader>
          <CardTitle>Crear Producto</CardTitle>
          <CardDescription>
            Formulario para crear un nuevo Producto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
}
