import Alltask from "../other/Alltask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

function AdminDashboard() {



    return (

        <div className="h-screen w-full p-10">
            <Header />

          <CreateTask />

          <Alltask />

        </div>


    );





}


export default AdminDashboard;