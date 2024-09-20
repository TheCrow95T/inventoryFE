import { useEffect, useState } from "react";
import editUser from "../api/admin/editUser";

const EditUserForm = ({
  groupList,
  userList,
  setUserList,
  editUsername,
  setEditUsername,
}) => {
  const [fullname, setFullname] = useState("");
  const [groupId, setGroupId] = useState(2);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const data = userList.filter((user) => user.username == editUsername);
    setFullname(data[0].fullname);
    const groupResult = groupList.filter(
      (group) => group.group_name == data[0].group_name,
    );
    setGroupId(groupResult[0].id);
  }, [editUsername]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullname || !editUsername || !groupId || !password) {
      alert("please fill out the form");
      return;
    }

    let response = await editUser(fullname, editUsername, groupId, password);

    console.log(response);
    if (response.message != "User edit success!") {
      return alert("User edit failed");
    }

    let userData = Object.values(response.results);
    setUserList(userData);

    setFullname("");
    setEditUsername("");
    setPassword("");
  };

  return (
    <>
      <h2>Create User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={editUsername} disabled />
        </div>
        <div>
          <label htmlFor="groupName">Group Name:</label>
          <select
            id="groupName"
            name="groupName"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
          >
            {groupList.map((group) => {
              if (group.id > 1) {
                return (
                  <option key={group.id + group.group_name} value={group.id}>
                    {group.group_name}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirm</button>
        <button onClick={() => setEditUsername("")}>Close</button>
      </form>
    </>
  );
};

export default EditUserForm;
