import { useState } from "react";
import createUser from "../api/admin/createUser";

const CreateUserForm = ({
  groupList,
  userList,
  setUserList,
  setCreateUserForm,
}) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [groupId, setGroupId] = useState(2);
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullname || !username || !groupId || !password) {
      alert("please fill out the form");
      return;
    }

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username == username) {
        alert("Duplicate user");
        return;
      }
    }

    let response = await createUser(fullname, username, groupId, password);

    console.log(response);
    if (response.message != "User create success!") {
      return alert("User Create failed");
    }

    let userData = Object.values(response.results);
    setUserList(userData);

    setFullname("");
    setUsername("");
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
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
        <button type="submit">Create</button>
        <button onClick={()=>setCreateUserForm(false)}>Close</button>
      </form>
    </>
  );
};

export default CreateUserForm;
