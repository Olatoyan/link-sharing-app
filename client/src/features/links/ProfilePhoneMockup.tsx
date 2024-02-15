import { useLinks } from "../../contexts/LinksContext";
import { getBgColor, getCorrespondingLogo } from "../../utils/helper";

function ProfilePhoneMockup() {
  const { links } = useLinks();
  console.log(links);

  return (
    <div className="relative flex w-full flex-col items-center justify-start justify-self-center bg-white p-16">
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
    </div>
  );
}

export default ProfilePhoneMockup;
