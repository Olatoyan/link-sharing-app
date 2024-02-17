// import ProfileHeader from "../../ui/ProfileHeader";
import { useEffect } from "react";
import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "./ProfilePhoneMockup";
import { useUserLink } from "./useUserLink";
import { useLinks } from "../../contexts/LinksContext";
import Loader from "../../ui/Loader";
type userProps = {
  name: string;
  link: string;
};
function ProfileLinksSection() {
  const { addLink } = useLinks();
  const { user, isFetching } = useUserLink();
  const userLinks: userProps[] = user?.data.links;

  // useEffect(() => {
  //   if (!isFetching) {
  //     userLinks?.map((user) => {
  //       addLink(user.name, user.link);
  //     });
  //   }
  // }, [userLinks, isFetching]);
  // useEffect(() => {
  //   console.log(userLinks);
  // }, [userLinks]);

  if (isFetching) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileCustomizeLinks />
    </section>
  );
}

export default ProfileLinksSection;
