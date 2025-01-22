"use client"
import { useRouter } from "next/navigation";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-gray-800">Product Detail - {id}</h1>
      <p className="text-gray-600 mt-4">
        Details about product {id} will go here. Fetch product data based on the ID.
      </p>
    </div>
  );
};

export default ProductDetail;
