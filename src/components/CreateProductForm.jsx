import { useState } from "react";
import createProduct from "../api/operation/createProduct";

const CreateProductForm = ({
    productList,
    setProductList,
    categoryList,
    setCreateProductForm,
}) => {
    const [productName, setProductName] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [buyingPrice, setBuyingPrice] = useState(1.0);
    const [sellingPrice, setSellingPrice] = useState(1.0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!productName || !categoryId || !buyingPrice || !sellingPrice) {
            alert("please fill out the form");
            return;
        }

        for (let i = 0; i < productList.length; i++) {
            if (productList[i].product_name == productName) {
                alert("Duplicate product name");
                return;
            }
        }

        let response = await createProduct(
            productName,
            categoryId,
            buyingPrice,
            sellingPrice,
        );

        console.log(response);
        if (response.message != "Product create success!") {
            alert("Product Create failed");
            return;
        } 

        let productData = Object.values(response.results);
        setProductList(productData);

        setProductName("");
        setBuyingPrice(1.0);
        setSellingPrice(1.0);
    };

    return (
        <>
            <h2>Create Product Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productname">Product name:</label>
                    <input
                        type="text"
                        id="productname"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="categoryName">Category Name:</label>
                    <select
                        id="categoryName"
                        name="categoryName"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        {categoryList.map((category) => {
                            return (
                                <option
                                    key={category.id + category.category_name}
                                    value={category.id}
                                >
                                    {category.category_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="buyingprice">Buying Price:</label>
                    <input
                        type="number"
                        id="buyingprice"
                        value={buyingPrice}
                        onChange={(e)=>setBuyingPrice(e.target.value)}
                        min="0.00"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                    />
                </div>
                <div>
                    <label htmlFor="sellingprice">Selling Price:</label>
                    <input
                        type="number"
                        id="sellingprice"
                        value={sellingPrice}
                        onChange={(e)=>setSellingPrice(e.target.value)}
                        min="0.00"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                    />
                </div>
                <button type="submit">Create</button>
                <button onClick={() => setCreateProductForm(false)}>Close</button>
            </form>
        </>
    );
};

export default CreateProductForm;
