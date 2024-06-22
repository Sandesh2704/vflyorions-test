import React from 'react';
import path from 'path';
import fs from 'fs/promises';
import ProductDetails from '@/components/ProductDetails';

const getProductsData = async () => {
  const filePath = path.join(process.cwd(), 'public', 'ProductData.json');
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    return [];
  }
};

export async function generateStaticParams() {
  const products = await getProductsData();
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params, }) {
  const products = await getProductsData();

  const product = products.find((product) => product.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductDetails item={product} />
    </>
  );
}