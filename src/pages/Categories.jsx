import { useEffect, useState } from "react";
import listCategories from "../api/operation/listCategories";
import CreateCategoryForm from "../components/CreateCategoryForm";
import EditCategoryForm from "../components/EditCategoryForm";
import CategoryListTable from "../components/CategoryListTable";

const Categories = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [createCategoryForm, setCreateCategoryForm] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState(null);

    useEffect(() => {
        const fetchAll = async () => {
            const categoryData = await listCategories();
            setCategoryList(categoryData);
        };
        fetchAll().catch(console.error);
    }, []);

    return (
        <>
            <div className="pageTitle">Categories</div>
            <button onClick={() => setCreateCategoryForm(true)}>
                Create Category
            </button>
            <CategoryListTable
                categoryList={categoryList}
                setEditCategoryId={setEditCategoryId}
            />
            {createCategoryForm ? (
                <CreateCategoryForm
                    categoryList={categoryList}
                    setCategoryList={setCategoryList}
                    setCreateCategoryForm={setCreateCategoryForm}
                />
            ) : null}
            { editCategoryId ?  (
                <EditCategoryForm
                    categoryList={categoryList}
                    setCategoryList={setCategoryList}
                    editCategoryId={editCategoryId}
                    setEditCategoryId={setEditCategoryId}
                />
            ): null}
        </>
    );
};

export default Categories;
