import { HiOutlinePlus } from "react-icons/hi2";
import EmptyLinksBox from "./EmptyLinksBox";
import LinkItems from "./LinkItems";
import { useLinks } from "../../contexts/LinksContext";

function ProfileCustomizeLinks() {
  const { links, addLink } = useLinks();
  console.log(links);

  return (
    <div className="flex flex-col border-b border-solid border-[#d9d9d9] bg-white p-16 pb-0">
      <h1 className="pb-[0.8rem] text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
        Customize your links
      </h1>
      <h3 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </h3>
      <button
        className="mb-[2.4rem] flex items-center justify-center gap-[0.8rem] rounded-[0.8rem] border border-solid border-[#633cff] px-11 py-4 text-[1.6rem] font-medium leading-[2.4rem] text-[#633cff] disabled:cursor-not-allowed disabled:border-[#ccc] disabled:bg-[#ccc] disabled:text-[#666]"
        onClick={() => addLink("Github", "")}
        disabled={links.length === 5}
      >
        <HiOutlinePlus />
        <span>Add link</span>
      </button>

      {links.length > 0 ? (
        links.map((link, index) => (
          <LinkItems key={index} index={index} link={link} number={index + 1} />
        ))
      ) : (
        <EmptyLinksBox />
      )}
    </div>
  );
}

export default ProfileCustomizeLinks;
