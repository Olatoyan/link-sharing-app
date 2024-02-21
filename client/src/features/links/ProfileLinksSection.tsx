import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "../../ui/ProfilePhoneMockup";
import { useUserLink } from "./useUserLink";
import Loader from "../../ui/Loader";
import Cookies from "js-cookie";
import { useLinks } from "../../contexts/LinksContext";
import { useCreateUserLink } from "./useCreateUserLink";
import SaveBtn from "../../ui/SaveBtn";
import { useGetUserProfile } from "../profile/useGetUserProfile";
import toast from "react-hot-toast";
function ProfileLinksSection() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { links } = useLinks();
  const { createUserLink, isCreating } = useCreateUserLink();

  async function saveLinksToDB() {
    const userId = Cookies.get("userId");
    try {
      const promises = links.map((link) =>
        createUserLink({
          id: link.id,
          name: link.name,
          link: link.link,
          user: userId!,
        }),
      );
      await Promise.all(promises);
      toast.success("Your link(s) have been saved!");
    } catch (error) {
      // Handle errors
      console.error("Error saving links:", error);
      toast.error("There was an error saving your link(s).");
    }
  }

  if (isFetching || isPending) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16 tablet:grid-cols-1 tablet:pt-0">
      <ProfilePhoneMockup />
      <ProfileCustomizeLinks isCreating={isCreating} />

      <SaveBtn
        disabled={links.length === 0 || isCreating}
        onSave={saveLinksToDB}
      />
    </section>
  );
}

export default ProfileLinksSection;
