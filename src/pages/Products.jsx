import { useEffect, useState } from "react";
import ProductListTable from "../components/ProductListTable";
import CreateProductForm from "../components/CreateProductForm";
import EditProductForm from "../components/EditProductForm";
import listCategories from "../api/operation/listCategories";
import listProducts from "../api/operation/listProducts";

const Products = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [createProductForm, setCreateProductForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const categoryData = await listCategories();
      setCategoryList(categoryData);
      const productData = await listProducts();
      setProductList(productData);
    };
    fetchAll().catch(console.error);
  }, []);

  return (
    <>
      <div className="pageTitle">Products</div>
      <button onClick={() => setCreateProductForm(true)}>Create Product</button>
      <ProductListTable
        productList={productList}
        setEditProductId={setEditProductId}
      />
      {createProductForm ? (
        <CreateProductForm
          productList={productList}
          setProductList={setProductList}
          categoryList={categoryList}
          setCreateProductForm={setCreateProductForm}
        />
      ) : null}
      {editProductId ? (
        <EditProductForm
          productList={productList}
          setProductList={setProductList}
          categoryList={categoryList}
          editProductId={editProductId}
          setEditProductId={setEditProductId}
        />
      ) : null}
    </>
  );
};

export default Products;
