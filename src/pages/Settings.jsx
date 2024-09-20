import { useState } from "react";
import changePassword from "../api/admin/changePassword";

const Settings = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password) {
      console.log("Both fields are required.");
      return;
    }

    let response = await changePassword(password);
    if (response.message != "Password change success") {
      return alert("Password change failed");
    }
  };

  return (
    <>
      <div>Settings</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Set New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Settings;
