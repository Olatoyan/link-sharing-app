import { HiOutlinePlus } from "react-icons/hi2";
// import EmptyLinksBox from "./EmptyLinksBox";
import LinkItems from "./LinkItems";

function ProfileCustomizeLinks() {
  return (
    <div className="flex flex-col p-16">
      <h1 className="pb-[0.8rem] text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
        Customize your links
      </h1>
      <h3 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </h3>
      <button className="mb-[2.4rem] flex items-center justify-center gap-[0.8rem] rounded-[0.8rem] border border-solid border-[#633cff] px-11 py-4 text-[1.6rem] font-medium leading-[2.4rem] text-[#633cff]">
        <HiOutlinePlus />
        <span>Add link</span>
      </button>

      {/* <EmptyLinksBox /> */}
      <LinkItems />

      <button className="mt-auto self-end rounded-[0.8rem] bg-[#633cff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-white">
        Save
      </button>
    </div>
  );
}

export default ProfileCustomizeLinks;
