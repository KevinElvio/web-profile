import Sidebar from "../Admin/Sidebar";
import Dashboard from "../Admin/Dashboard";
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
