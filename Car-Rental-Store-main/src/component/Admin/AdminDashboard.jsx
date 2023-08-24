import React from "react";
import { useAdminDataContext } from "./AdminProvider";
const AdminDashboard = () => {
  const { adminData } = useAdminDataContext();
  console.log(adminData);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default AdminDashboard;
