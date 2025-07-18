import Sidebar from "../../components/admin/Sidebar";
import TableProject from "../layouts/Admin/tableProject";


function SkillAdmin() {
    return(
        <div className="flex">
            <Sidebar />
            <TableProject />
        </div>
    )
}

export default SkillAdmin;