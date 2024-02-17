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

export function getCorrespondingLogo(name: string, size?: string) {
  if (name === "Github") return <PiGithubLogoFill size={size} />;
  if (name === "Dev.to") return <PiDevToLogoFill size={size} />;
  if (name === "Frontend Mentor") return <SiFrontendmentor size={size} />;
  if (name === "Codewars") return <SiCodewars size={size} />;
  if (name === "Gitlab") return <SiGitlab size={size} />;
  if (name === "Hashnode") return <SiHashnode size={size} />;
  if (name === "Twitter") return <IoLogoTwitter size={size} />;
  if (name === "LinkedIn") return <FaLinkedin size={size} />;
  if (name === "YouTube") return <FaYoutube size={size} />;
  if (name === "Facebook") return <FaFacebook size={size} />;
  if (name === "Twitch") return <FaTwitch size={size} />;
  if (name === "Codepen") return <FaCodepen size={size} />;
  if (name === "freeCodeCamp") return <FaFreeCodeCamp size={size} />;
  if (name === "StackOverflow") return <FaStackOverflow size={size} />;
}

export function getBgColor(name: string) {
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

export function getRightProfileUrl(name: string) {
  if (name === "Github") return "https://github.com/";
  if (name === "Dev.to") return "https://dev.to/";
  if (name === "Frontend Mentor")
    return "https://www.frontendmentor.io/profile/";
  if (name === "Codewars") return "https://www.codewars.com/users/";
  if (name === "Gitlab") return "https://gitlab.com/";
  if (name === "Hashnode") return "https://hashnode.com/@";
  if (name === "Twitter") return "https://twitter.com/";
  if (name === "LinkedIn") return "https://www.linkedin.com/in/";
  if (name === "YouTube") return "https://www.youtube.com/";
  if (name === "Facebook") return "https://www.facebook.com/";
  if (name === "Twitch") return "https://www.twitch.tv/";
  if (name === "Codepen") return "https://codepen.io/";
  if (name === "freeCodeCamp")
    return "https://www.freecodecamp.org/news/author";
  if (name === "StackOverflow") return "https://stackoverflow.com/users/";
}
