const CategoryListTable = ({ categoryList, setEditCategoryId }) => {
    const last_login_time_human = (last_login_time_server) => {
        // Create a Date object from the string
        const date = new Date(last_login_time_server);

        // Options for formatting
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        };

        // Format the date
        return date.toLocaleString("en-GB", options);
    };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Username</th>
                        <th>Date Added</th>
                        <th>Date Modified</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList.map((item, index) => (
                        <tr key={item.id + item.category_name}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.category_name}</td>
                            <td>{item.username}</td>
                            <td>{last_login_time_human(item.date_added)}</td>
                            <td>{last_login_time_human(item.date_modified)}</td>
                            <td>
                                {item.id ? (
                                    <>
                                        <button onClick={() => setEditCategoryId(item.id)}>
                                            Edit Name
                                        </button>
                                    </>
                                ) : (
                                    <div>Cannot be change</div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CategoryListTable;
