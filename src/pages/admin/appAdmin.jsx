import Sidebar from "../../components/admin/Sidebar";
import Dashboard from "../layouts/Admin/Dashboard";
import Header from "../layouts/Admin/Header";

const AppAdmin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Header/>
        <Dashboard/>
      </div>
    </div>
  );
};

export default AppAdmin;
