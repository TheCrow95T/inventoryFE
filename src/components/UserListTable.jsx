import deleteUser from "../api/admin/deleteUser";

const UserListTable = ({ userList, setUserList, setEditUsername }) => {
  const last_login_time_human = (last_login_time_server) => {
    // Create a Date object from the string
    const date = new Date(last_login_time_server);

    // Options for formatting
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    // Format the date
    return date.toLocaleString("en-GB", options);
  };

  const handleDeleteUser = async (username) => {
    let response = await deleteUser(username);

    if (response.message == "User delete sucess") {
      // Refresh user list
      setUserList(userList.filter((x) => x.username != username));
    } else {
      alert("Delete User failed");
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Group Name</th>
            <th>Last Login Time</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => (
            <tr key={item.id + item.username}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.username}</td>
              <td>{item.group_name}</td>
              <td>{last_login_time_human(item.last_login_time)}</td>
              <td>
                {item.group_name !== "Super Admin" ? (
                  <>
                    <button onClick={() => setEditUsername(item.username)}>Edit</button>
                    <button onClick={() => handleDeleteUser(item.username)}>
                      Delete
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
export default UserListTable;
