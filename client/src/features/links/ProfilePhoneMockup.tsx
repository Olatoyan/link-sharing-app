import { PiGithubLogoFill } from "react-icons/pi";

function ProfilePhoneMockup() {
  return (
    <div className="relative flex w-full flex-col items-center justify-start justify-self-center bg-white p-16">
      <img src="./illustration-phone-mockup.svg" alt="phone mockup" />

      <div className="absolute top-[28rem] flex flex-col gap-[2.2rem] p-16">
        <div className="flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] bg-[#1a1a1a] px-[1.6rem] py-[1.3rem] text-white">
          <PiGithubLogoFill size={"1.6rem"} />
          <h3>Github</h3>
          <img
            src="./icon-arrow-right.svg"
            alt="arrow right"
            className="ml-auto"
          />
        </div>
        {/* <div className="flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] bg-[#1a1a1a] px-[1.6rem] py-[1.3rem] text-white">
          <PiGithubLogoFill size={"1.6rem"} />
          <h3>Github</h3>
          <img
            src="./icon-arrow-right.svg"
            alt="arrow right"
            className="ml-auto"
          />
        </div>
        <div className="flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] bg-[#1a1a1a] px-[1.6rem] py-[1.3rem] text-white">
          <PiGithubLogoFill size={"1.6rem"} />
          <h3>Github</h3>
          <img
            src="./icon-arrow-right.svg"
            alt="arrow right"
            className="ml-auto"
          />
        </div>
        <div className="flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] bg-[#1a1a1a] px-[1.6rem] py-[1.3rem] text-white">
          <PiGithubLogoFill size={"1.6rem"} />
          <h3>Github</h3>
          <img
            src="./icon-arrow-right.svg"
            alt="arrow right"
            className="ml-auto"
          />
        </div>
        <div className="flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] bg-[#1a1a1a] px-[1.6rem] py-[1.3rem] text-white">
          <PiGithubLogoFill size={"1.6rem"} />
          <h3>Github</h3>
          <img
            src="./icon-arrow-right.svg"
            alt="arrow right"
            className="ml-auto"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProfilePhoneMockup;
