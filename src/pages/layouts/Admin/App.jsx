import Sidebar from "../../../components/admin/Sidebar";
import Dashboard from "./Dashboard";
import Header from "./Header";

const App = () => {
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

export default App;
