import { useLinks } from "../contexts/LinksContext";
import { useUserContext } from "../contexts/UserProfileContext";
import { getBgColor, getCorrespondingLogo } from "../utils/helper";
import Cookies from "js-cookie";

function ProfilePhoneMockup() {
  const { links } = useLinks();
  const { firstName, lastName, photo } = useUserContext();

  const UserMail = Cookies.get("userMail");

  return (
    <div className="relative flex w-full flex-col items-center justify-start justify-self-center bg-white p-16 pb-0">
      <img src="./illustration-phone-mockup.svg" alt="phone mockup" />

      <div className="absolute top-[28rem] flex flex-col gap-[1.3rem] p-16">
        {links.map((link, index) => (
          <div
            className={`flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] px-[1.6rem] py-[1.3rem] ${getBgColor(
              link.name,
            )}`}
            key={index}
          >
            {getCorrespondingLogo(link.name, "2rem")}
            <h3 className="text-[1.6rem] leading-[2.4rem]">{link.name}</h3>
            <img
              src="./icon-arrow-right.svg"
              alt="arrow right"
              className="ml-auto"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-[22rem] flex flex-col items-center">
        <p className="w-full min-w-[17rem] bg-white text-center text-[1.8rem] font-semibold leading-[2.7rem] text-[#333]">
          {firstName} {lastName}
        </p>

        <p
          className={`bg-white text-[1.4rem] leading-[2.1rem] text-[#737373] ${firstName || lastName ? "mt-0" : "mt-[2.2rem]"}`}
        >
          {UserMail}
        </p>
      </div>

      {photo ? (
        <img
          src={photo}
          alt="photo"
          className="absolute top-[10.5rem] h-[9.6rem] w-[9.6rem] rounded-full object-cover"
        />
      ) : null}
    </div>
  );
}

export default ProfilePhoneMockup;
