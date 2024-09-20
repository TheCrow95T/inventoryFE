import { useEffect, useState } from "react";
import editCategories from "../api/operation/editCategories";

const EditCategoryForm = ({
  categoryList,
  setCategoryList,
  editCategoryId,
  setEditCategoryId,
}) => {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const categorySelect = categoryList.filter(
      (item) => item.id == editCategoryId,
    );
    setCategoryName(categorySelect[0].category_name);
  }, [editCategoryId]);

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

    let response = await editCategories(editCategoryId, categoryName);

    console.log(response);
    if (response.message != "Category edit success!") {
      return alert("Category edit failed");
    }

    let categoryData = Object.values(response.results);
    setCategoryList(categoryData);
    setEditCategoryId("");
  };

  return (
    <>
      <h2>Edit User Form</h2>
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
        <button type="submit">Confirm</button>
        <button onClick={() => setEditCategoryId(null)}>Close</button>
      </form>
    </>
  );
};

export default EditCategoryForm;
