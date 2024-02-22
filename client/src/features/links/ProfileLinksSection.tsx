import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "../../ui/ProfilePhoneMockup";
import { useUserLink } from "./useUserLink";
import Loader from "../../ui/Loader";
import { useLinks } from "../../contexts/LinksContext";
import { useCreateUserLink } from "./useCreateUserLink";
import SaveBtn from "../../ui/SaveBtn";
import { useGetUserProfile } from "../profile/useGetUserProfile";
import toast from "react-hot-toast";

import TransparentLoader from "../../ui/TransparentLoader";
import { useUpdateProfile } from "../profile/useUpdateProfile";
import { useLogout } from "../../ui/useLogout";
import ProfileHeader from "../../ui/ProfileHeader";
function ProfileLinksSection() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { createUserLink, isCreating } = useCreateUserLink();

  const { isUpdating } = useUpdateProfile();
  const { isLogoutPending } = useLogout();
  const { links } = useLinks();

  function saveLinksToDB() {
    createUserLink(links, {
      onSuccess: () => {
        toast.success("Link created successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
    // links.map((link) =>
    //   createUserLink(
    //     {
    //       id: link.id,
    //       name: link.name,
    //       link: link.link,
    //       user: userId!,
    //     },
    // {
    //   onSuccess: () => {
    //     toast.success("Link created successfully");
    //   },
    //     },
    //   ),
    // );
  }

  if (isFetching || isPending) return <Loader />;

  return (
    <main className="relative">
      <ProfileHeader />
      <section className="grid grid-cols-2 gap-8 pt-16 tablet:grid-cols-1 tablet:pt-0">
        <ProfilePhoneMockup />
        <ProfileCustomizeLinks isCreating={isCreating} />

        <SaveBtn
          disabled={links.length === 0 || isCreating}
          onSave={saveLinksToDB}
        />
        {(isFetching ||
          isCreating ||
          isUpdating ||
          isPending ||
          isLogoutPending) && <TransparentLoader />}
      </section>
    </main>
  );
}

export default ProfileLinksSection;
