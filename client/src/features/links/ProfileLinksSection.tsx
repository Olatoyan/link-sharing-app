import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "./ProfilePhoneMockup";
import { useUserLink } from "./useUserLink";
import Loader from "../../ui/Loader";
function ProfileLinksSection() {
  const { isFetching, user } = useUserLink();

  if (isFetching && !user) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileCustomizeLinks />
    </section>
  );
}

export default ProfileLinksSection;
