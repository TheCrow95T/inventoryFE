import { useState } from "react";
import createCategories from "../api/operation/createCategories";

const CreateCategoryForm = ({categoryList, setCategoryList,setCreateCategoryForm}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName) {
      alert("please fill out the form");
      return;
    }

    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].category_name == categoryName) {
        alert("Duplicate category name");
        return;
      }
    }

    let response = await createCategories(categoryName);

    console.log(response);
    if (response.message != "Category create success!") {
      return alert("Category Create failed");
    }

    let categoryData = Object.values(response.results);
    setCategoryList(categoryData);

    setCategoryName("");
  };

  return (
    <>
      <h2>Create User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Category name:</label>
          <input
            type="text"
            id="fullname"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
        <button onClick={()=>setCreateCategoryForm(false)}>Close</button>
      </form>
    </>
  );
}

export default CreateCategoryForm
