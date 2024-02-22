import ProfilePhoneMockup from "../../ui/ProfilePhoneMockup";
import { useUserLink } from "../links/useUserLink";
import Loader from "../../ui/Loader";
import ProfileDetails from "./ProfileDetails";
import SaveBtn from "../../ui/SaveBtn";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserProfileContext";
import { useUpdateProfile } from "./useUpdateProfile";
import { useGetUserProfile } from "./useGetUserProfile";
import { useCreateUserLink } from "../links/useCreateUserLink";
import { useLogout } from "../../ui/useLogout";
import TransparentLoader from "../../ui/TransparentLoader";
import ProfileHeader from "../../ui/ProfileHeader";

type FormData = {
  firstName: string;
  lastName: string;
};

function ProfileDetailsSection() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { isCreating } = useCreateUserLink();

  const { updateProfile, isUpdating } = useUpdateProfile();

  const { isLogoutPending } = useLogout();
  const { register, handleSubmit, formState } = useForm<FormData>();

  const { errors } = formState;

  const { updateFirstName, updateLastName, photo } = useUserContext();

  function onSubmitData(data: FormData): void {
    updateProfile(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        photo: photo,
      },
      {
        onSuccess: () => {
          updateFirstName(data.firstName);
          updateLastName(data.lastName);
        },
      },
    );
  }

  if (isFetching || isPending) return <Loader />;

  return (
    <main className="relative">
      <ProfileHeader />
      <section className="grid grid-cols-2 gap-8 pt-16 tablet:grid-cols-1 tablet:pt-0">
        <ProfilePhoneMockup />
        <ProfileDetails
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          isUpdating={isUpdating}
          onSubmitData={onSubmitData}
        />

        <SaveBtn disabled={false} onSave={handleSubmit(onSubmitData)} />
        {(isFetching ||
          isCreating ||
          isUpdating ||
          isPending ||
          isLogoutPending) && <TransparentLoader />}
      </section>
    </main>
  );
}

export default ProfileDetailsSection;
