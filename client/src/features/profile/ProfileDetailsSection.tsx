// import ProfileCustomizeLinks from "../ProfileCustomizeLinks";
import ProfilePhoneMockup from "../../ui/ProfilePhoneMockup";
import { useUserLink } from "../links/useUserLink";
import Loader from "../../ui/Loader";
import ProfileDetails from "./ProfileDetails";
import SaveBtn from "../../ui/SaveBtn";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserProfileContext";
import { useUpdateProfile } from "./useUpdateProfile";
import { useGetUserProfile } from "./useGetUserProfile";

type FormData = {
  firstName: string;
  lastName: string;
};

function ProfileDetailsSection() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { register, handleSubmit, formState } = useForm<FormData>();

  const { errors } = formState;

  const { updateFirstName, updateLastName, photo } = useUserContext();
  const { updateProfile, isUpdating } = useUpdateProfile();

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
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileDetails
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        isUpdating={isUpdating}
        onSubmitData={onSubmitData}
      />

      <SaveBtn disabled={false} onSave={handleSubmit(onSubmitData)} />
    </section>
  );
}

export default ProfileDetailsSection;
