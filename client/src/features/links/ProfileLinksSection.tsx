// import ProfileHeader from "../../ui/ProfileHeader";
import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "./ProfilePhoneMockup";

function ProfileLinksSection() {
  return (
    <section className="grid grid-cols-2 gap-8 pt-16">
      <ProfilePhoneMockup />
      <ProfileCustomizeLinks />
    </section>
  );
}

export default ProfileLinksSection;
