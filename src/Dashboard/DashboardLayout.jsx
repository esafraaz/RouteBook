import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
	return (
		<div className="flex gap-4 flex-col md:flex-row bg-green-900 min-h-screen">
			<div className="bg-green-950">
				<SideBar />
			</div>
			<div className="text-white flex items-center align-middle justify-center mx-auto">
				<Outlet />
			</div>

			{/* <div className='w-full h-screen overflow-y-hidden'>
        <div className='h-screen bg-blue-500 w-full' id='user'></div>
        <div className='h-screen bg-slate-300' id='inbox'>inbox</div>
      </div> */}
		</div>
	);
};
