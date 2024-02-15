import ProfileHeader from "../../ui/ProfileHeader";
import ProfileCustomizeLinks from "./ProfileCustomizeLinks";
import ProfilePhoneMockup from "./ProfilePhoneMockup";

function ProfileLinksSection() {
  return (
    <main>
      <ProfileHeader />

      <section className="grid grid-cols-2 gap-8 pt-16">
        <ProfilePhoneMockup />
        <ProfileCustomizeLinks />
      </section>
    </main>
  );
}

export default ProfileLinksSection;
