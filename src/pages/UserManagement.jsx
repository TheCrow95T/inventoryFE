import { useEffect, useState } from "react";
import listGroup from "../api/admin/listGroup";
import listUser from "../api/admin/listUser";
import GroupListTable from "../components/GroupListTable";
import UserListTable from "../components/UserListTable";
import CreateUserForm from "../components/CreateUserForm";
import EditUserForm from "../components/EditUserForm";

const UserManagement = () => {
  const [groupList, setGroupList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [createUserForm, setCreateUserForm] = useState(false);
  const [editUsername, setEditUsername] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      const groupData = await listGroup();
      setGroupList(groupData);
      const userData = await listUser();
      setUserList(userData);
    };
    fetchAll().catch(console.error);
  }, []);

  return (
    <>
      <div className="pageTitle">User Management</div>
      <div className="subSectionTitle">Groups</div>
      <GroupListTable groupList={groupList} />
      <div className="subSectionTitle">Users</div>
      <button onClick={() => setCreateUserForm(true)}> Create User</button>
      <UserListTable
        userList={userList}
        setUserList={setUserList}
        setEditUsername={setEditUsername}
      />
      {createUserForm ? (
        <CreateUserForm
          groupList={groupList}
          userList={userList}
          setUserList={setUserList}
          setCreateUserForm={setCreateUserForm}
        />
      ) : null}
      {editUsername == "" ? null : (
        <EditUserForm
          groupList={groupList}
          userList={userList}
          setUserList={setUserList}
          editUsername={editUsername}
          setEditUsername={setEditUsername}
        />
      )}
    </>
  );
};

export default UserManagement;
