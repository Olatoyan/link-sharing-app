// import ProfileCustomizeLinks from "../ProfileCustomizeLinks";
import ProfilePhoneMockup from "../links/ProfilePhoneMockup";
import { useUserLink } from "../links/useUserLink";
import Loader from "../../ui/Loader";
import ProfileDetails from "./ProfileDetails";
import SaveBtn from "../../ui/SaveBtn";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserProfileContext";
import { useUpdateProfile } from "./useUpdateProfile";

type FormData = {
  firstName: string;
  lastName: string;
};

function ProfileDetailsSection() {
  const { isFetching } = useUserLink();
  const { register, handleSubmit, formState } = useForm<FormData>();

  const { errors } = formState;

  const { updateFirstName, updateLastName } = useUserContext();
  const { updateProfile, isUpdating } = useUpdateProfile();

  function onSubmitData(data: FormData): void {
    console.log(data);
    updateProfile(
      {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      {
        onSuccess: () => {
          updateFirstName(data.firstName);
          updateLastName(data.lastName);
        },
      },
    );
  }

  if (isFetching) return <Loader />;

  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileDetails
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        isUpdating={isUpdating}
      />

      <SaveBtn disabled={false} onSave={handleSubmit(onSubmitData)} />
    </section>
  );
}

export default ProfileDetailsSection;
