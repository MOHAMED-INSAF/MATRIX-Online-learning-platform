import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import { AboutUsSidebarItem } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm backdrop-filter backdrop-blur bg-opacity-50">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <div className=" mt-auto "> 
        <div className="h-full  flex flex-col overflow-y-auto shadow-sm backdrop-filter backdrop-blur bg-opacity-50 mt-auto  "> 
          <AboutUsSidebarItem />
        </div>
      </div>
    </div>
  );
};
