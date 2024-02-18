import { motion } from "framer-motion";
import { useLinks } from "../../contexts/LinksContext";
import { getRightProfileUrl } from "../../utils/helper";

type LinkProps = {
  name: string;
  links: string;
  icon: JSX.Element;
  index: number;
  setLinks: React.Dispatch<React.SetStateAction<string>>;
  setIsLinkBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLinkUrl: React.Dispatch<React.SetStateAction<string>>;
};

function LinkPlatformItems({
  name,
  icon,
  links,
  index,
  setLinks,
  setIsLinkBoxOpen,
  setLinkUrl,
}: LinkProps) {
  const { updateLink } = useLinks();

  function handleChangePlatform() {
    setLinks(name);
    setIsLinkBoxOpen(false);
    updateLink(index, { name });
    setLinkUrl(getRightProfileUrl(name)!);
  }
  return (
    <motion.div
      className={`flex cursor-pointer items-center gap-5 border-b border-solid border-[#d9d9d9] pb-5 transition-none hover:text-[#633cff] ${
        links === name ? "text-[#633cff]" : "text-[#333]"
      }`}
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
      }}
      onClick={handleChangePlatform}
    >
      {icon}
      <span className="text-[1.6rem] leading-[2.4rem]">{name}</span>
    </motion.div>
  );
}

export default LinkPlatformItems;
