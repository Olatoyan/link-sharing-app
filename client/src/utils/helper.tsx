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

export function getCorrespondingLogo(name: string) {
  if (name === "Github") return <PiGithubLogoFill />;
  if (name === "Dev.to") return <PiDevToLogoFill />;
  if (name === "Frontend Mentor") return <SiFrontendmentor />;
  if (name === "Codewars") return <SiCodewars />;
  if (name === "Gitlab") return <SiGitlab />;
  if (name === "Hashnode") return <SiHashnode />;
  if (name === "Twitter") return <IoLogoTwitter />;
  if (name === "LinkedIn") return <FaLinkedin />;
  if (name === "Youtube") return <FaYoutube />;
  if (name === "Facebook") return <FaFacebook />;
  if (name === "Twitch") return <FaTwitch />;
  if (name === "Codepen") return <FaCodepen />;
  if (name === "freecodecamp") return <FaFreeCodeCamp />;
  if (name === "StackOverflow") return <FaStackOverflow />;
}
