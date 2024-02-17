import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "./ProfilePhoneMockup";
import { useUserLink } from "./useUserLink";
import Loader from "../../ui/Loader";
import Cookies from "js-cookie";
import { useLinks } from "../../contexts/LinksContext";
import { useCreateUserLink } from "./useCreateUserLink";
import SaveBtn from "../../ui/SaveBtn";
import { useGetUserProfile } from "../profile/useGetUserProfile";
function ProfileLinksSection() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { links } = useLinks();
  const { createUserLink } = useCreateUserLink();

  function saveLinksToDB() {
    const userId = Cookies.get("userId");
    // console.log(userId);
    links.forEach((link) => {
      createUserLink({
        name: link.name,
        link: link.link,
        user: userId!,
      });
    });
  }

  if (isFetching || isPending) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileCustomizeLinks />

      <SaveBtn disabled={links.length === 0} onSave={saveLinksToDB} />
    </section>
  );
}

export default ProfileLinksSection;
