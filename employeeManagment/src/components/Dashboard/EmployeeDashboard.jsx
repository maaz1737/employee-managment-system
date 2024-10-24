import Tasklist from "../Auth/context/Tasklist/Tasklist";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";

function EmployeeDashboard(){



    return(
        <>

        <div className="p-10  h-screen bg-[#1C1C1C]">
        <Header />
        <TaskListNumber />
        <Tasklist />
        </div>
        
        

        </>
    );


}

export default EmployeeDashboard;