const GroupListTable = ({ groupList }) => (
  <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Group Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {groupList.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.group_name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default GroupListTable;
