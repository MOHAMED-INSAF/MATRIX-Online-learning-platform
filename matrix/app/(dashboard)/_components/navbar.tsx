import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-transparent backdrop-filter backdrop-blur-sm shadow-sm">
      <ModeToggle />
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
