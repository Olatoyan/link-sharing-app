import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineLink } from "react-icons/hi";
import { PiGithubLogoFill, PiDevToLogoFill } from "react-icons/pi";
import {
  SiFrontendmentor,
  SiCodewars,
  SiGitlab,
  SiHashnode,
} from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaCodepen,
  FaFreeCodeCamp,
  FaStackOverflow,
} from "react-icons/fa";
import LinkPlatformItems from "./LinkPlatformItems";

import { LinkProps } from "../../contexts/LinksContext";
import { getCorrespondingLogo } from "../../utils/helper";

const socialPlatforms = [
  {
    name: "Github",
    icon: <PiGithubLogoFill size={"1.6rem"} />,
  },
  {
    name: "Dev.to",
    icon: <PiDevToLogoFill size={"1.6rem"} />,
  },
  {
    name: "Frontend Mentor",
    icon: <SiFrontendmentor size={"1.6rem"} />,
  },
  {
    name: "Codewars",
    icon: <SiCodewars size={"1.6rem"} />,
  },
  {
    name: "Gitlab",
    icon: <SiGitlab size={"1.6rem"} />,
  },
  {
    name: "Hashnode",
    icon: <SiHashnode size={"1.6rem"} />,
  },
  {
    name: "Twitter",
    icon: <IoLogoTwitter size={"1.6rem"} />,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={"1.6rem"} />,
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={"1.6rem"} />,
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={"1.6rem"} />,
  },
  {
    name: "Twitch",
    icon: <FaTwitch size={"1.6rem"} />,
  },
  {
    name: "Codepen",
    icon: <FaCodepen size={"1.6rem"} />,
  },
  {
    name: "freeCodeCamp",
    icon: <FaFreeCodeCamp size={"1.6rem"} />,
  },
  {
    name: "StackOverflow",
    icon: <FaStackOverflow size={"1.6rem"} />,
  },
];

function LinkItems({ link, number }: { link: LinkProps; number: number }) {
  const [links, setLinks] = useState("Github");
  const [isLinkBoxOpen, setIsLinkBoxOpen] = useState(false);

  function handlePlatformChange(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();
    setIsLinkBoxOpen((prev) => !prev);
  }

  return (
    <div className="rounded-[1.2rem] bg-[#fafafa] p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.6rem] font-bold leading-[2.4rem] text-[#737373]">
          Link #{number}
        </h3>
        <p className="text-[1.6rem] leading-[2.4rem] text-[#737373]">Remove</p>
      </div>

      <form className="flex flex-col gap-[1.2rem] pt-[1.2rem]">
        <div>
          <label
            htmlFor="platform"
            className="text-[1.2rem] leading-[1.8rem] text-[#333]"
          >
            Platform
          </label>

          <div className="relative">
            <button
              className="flex w-full items-center gap-5 rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff] focus:shadow-purple-sh"
              onClick={handlePlatformChange}
            >
              {getCorrespondingLogo(links)}
              <p>{links}</p>
              <img
                src="./icon-chevron-down.svg"
                alt="chevron down"
                className="ml-auto"
              />
            </button>

            <AnimatePresence mode="wait">
              {isLinkBoxOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  className="absolute top-[6rem] z-[3] flex  w-full flex-col gap-[1.2rem] rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white p-[1.6rem] shadow-dark-sh"
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      animate: {
                        transition: { staggerChildren: 0.1 },
                      },
                      exit: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    className="flex flex-col gap-[1.2rem]"
                  >
                    {socialPlatforms.map((platform) => (
                      <LinkPlatformItems
                        name={platform.name}
                        icon={platform.icon}
                        key={platform.name}
                        setLinks={setLinks}
                        setIsLinkBoxOpen={setIsLinkBoxOpen}
                        links={links}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <label
            htmlFor="link"
            className="text-[1.2rem] leading-[1.8rem] text-[#333]"
          >
            Link
          </label>
          <div className="relative flex">
            <HiOutlineLink
              size={"1.6rem"}
              className="absolute left-[2.5%] top-[40%] text-[#737373]"
            />
            <input
              type="text"
              placeholder="e.g. https://www.github.com/johnappleseed"
              id="link"
              className="w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white py-5 pl-[4rem] text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff] focus:shadow-purple-sh"
            />
            <p className="absolute right-[2.5%] top-[40%] hidden text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
              cant't be empty
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LinkItems;
