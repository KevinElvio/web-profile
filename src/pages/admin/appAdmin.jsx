import Sidebar from "../../components/admin/Sidebar";
import Header from "../layouts/Admin/Header";

const AppAdmin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Header/>
      </div>
    </div>
  );
};

export default AppAdmin;
