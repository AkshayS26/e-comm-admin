import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditProduct = () => {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=` + id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  return (
    <>
      <Layout>
        <div>
          <h2> Edit your product here</h2>
        </div>
        {productInfo && <ProductForm {...productInfo} />}
      </Layout>
    </>
  );
};

export default EditProduct;
