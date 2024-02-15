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
