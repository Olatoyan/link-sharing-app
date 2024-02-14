import { motion } from "framer-motion";

function LinkPlatformItems({
  name,
  icon,
  links,
  setLinks,
  setIsLinkBoxOpen,
}: {
  name: string;
  links: string;
  icon: JSX.Element;
  setLinks: React.Dispatch<React.SetStateAction<string>>;
  setIsLinkBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleChangePlatform() {
    setLinks(name);
    setIsLinkBoxOpen(false);
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
