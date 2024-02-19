import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function AppLayout() {
  return (
    <main className="my-[2.4rem]">
      <ProfileHeader />

      <Outlet />
    </main>
  );
}

export default AppLayout;
