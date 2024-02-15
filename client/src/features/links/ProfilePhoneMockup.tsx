import { useLinks } from "../../contexts/LinksContext";
import { getCorrespondingLogo } from "../../utils/helper";

function ProfilePhoneMockup() {
  const { links } = useLinks();
  console.log(links);

  function getBgColor(name: string) {
    if (name === "Github") return "bg-[#1a1a1a] text-white";
    if (name === "Frontend Mentor")
      return "bg-white border border-solid border-[#d9d9d9] text-[#333]";
    if (name === "Twitter") return "bg-[#43b7e9] text-white";
    if (name === "LinkedIn") return "bg-[#2d68ff] text-white";
    if (name === "YouTube") return "bg-[#ee3939] text-white";
    if (name === "Facebook") return "bg-[#2442ac] text-white";
    if (name === "Dev.to") return "bg-[#333] text-white";
    if (name === "Codewars") return "bg-[#ba1a50] text-white";
    if (name === "freeCodeCamp") return "bg-[#302267] text-white";
    if (name === "Gitlab") return "bg-[#eb4925] text-white";
    if (name === "Hashnode") return "bg-[#0330d1] text-white";
    if (name === "StackOverflow") return "bg-[#ec7100] text-white";
    if (name === "Twitch") return "bg-[#ee3fc8] text-white";
    if (name === "Codepen") return "bg-[#464646] text-white";
  }

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
