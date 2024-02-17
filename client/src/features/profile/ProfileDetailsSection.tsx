// import ProfileCustomizeLinks from "../ProfileCustomizeLinks";
import ProfilePhoneMockup from "../links/ProfilePhoneMockup";
import { useUserLink } from "../links/useUserLink";
import Loader from "../../ui/Loader";
import ProfileDetails from "./ProfileDetails";
function ProfileDetailsSection() {
  const { isFetching } = useUserLink();

  if (isFetching) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileDetails />
    </section>
  );
}

export default ProfileDetailsSection;
