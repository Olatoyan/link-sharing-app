import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function AppLayout() {
  return (
    <main>
      <ProfileHeader />

      <Outlet />
    </main>
  );
}

export default AppLayout;
