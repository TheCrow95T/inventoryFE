import { useEffect, useState } from "react";
import editProduct from "../api/operation/editProduct";

const EditProductForm = ({
    productList,
    setProductList,
    categoryList,
    editProductId,
    setEditProductId,
}) => {
    const [productName, setProductName] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [buyingPrice, setBuyingPrice] = useState(1.0);
    const [sellingPrice, setSellingPrice] = useState(1.0);

    useEffect(() => {
        const productSelect = productList.filter(
            (item) => item.id == editProductId,
        );
        setProductName(productSelect[0].product_name);
        setCategoryId(productSelect[0].category_id);
        setBuyingPrice(productSelect[0].buying_price);
        setSellingPrice(productSelect[0].selling_price);
    }, [editProductId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!productName || !categoryId || !buyingPrice || !sellingPrice) {
            alert("please fill out the form");
            return;
        }

        for (let i = 0; i < productList.length; i++) {
            if (productList[i].product_name == productName && productList[i].id != editProductId) {
                alert("Duplicate product name");
                return;
            }
        }

        let response = await editProduct(
            editProductId,
            productName,
            categoryId,
            buyingPrice,
            sellingPrice,
        );

        console.log(response);
        if (response.message != "Product edit success!") {
            alert("Product Edit failed");
            return;
        } 

        let productData = Object.values(response.results);
        setProductList(productData);
        setEditProductId(null);
    };

    return (
        <>
            <h2>Edit User Form</h2>
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
                <button type="submit">Confirm</button>
                <button onClick={() => setEditProductId(null)}>Close</button>
            </form>
        </>
    );
};

export default EditProductForm;
