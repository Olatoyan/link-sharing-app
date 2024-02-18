import { Link, useNavigate } from "react-router-dom";
import { LinkProps } from "../contexts/LinksContext";
import { getBgColor, getCorrespondingLogo } from "../utils/helper";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useGetOfflineLinks } from "./useGetOfflineLinks";
import { useGetOfflineUser } from "./useGetOfflineUser";
import { HiOutlineLink } from "react-icons/hi";
import Loader from "./Loader";
import Cookies from "js-cookie";
import { useState } from "react";

function PreviewPage() {
  const [isCopied, setIsCopied] = useState(false);

  const { isOfflineLinksPending, offlineLinks } = useGetOfflineLinks();
  const { isOfflineUserPending, offlineUser } = useGetOfflineUser();

  const navigate = useNavigate();

  const userId = Cookies.get("userId");
  const userMail = Cookies.get("userMail");
  const token = Cookies.get("jwt");
  console.log({ userId, userMail, token });

  function handleClipboardCopy() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  if (isOfflineLinksPending || isOfflineUserPending) return <Loader />;

  if (!offlineUser && !offlineLinks) return navigate("/login");

  const user = offlineUser.data.user[0];
  const links: LinkProps[] = offlineLinks.data.links;
  console.log(links);

  return (
    <section className="relative min-h-[100dvh]">
      <div className="h-[35rem] rounded-[0_0_3.2rem_3.2rem] bg-[#633cff]"></div>
      {userId && userMail && token && (
        <header className="absolute top-[2.4rem] mx-[2.4rem] flex w-[97%] items-center justify-between rounded-[1.2rem] bg-white px-[2.4rem] py-[1.6rem]">
          <Link
            to="/add-links"
            className="rounded-[0.8rem] border border-solid border-[#633cff] px-[2.7rem] py-[1.1rem] text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]"
          >
            Back to Editor
          </Link>
          <button
            className="rounded-[0.8rem] bg-[#633cff] px-[2.7rem] py-[1.1rem] text-[1.6rem] font-semibold leading-[2.4rem] text-white"
            onClick={handleClipboardCopy}
          >
            Share Link
          </button>
        </header>
      )}
      <div className="absolute left-1/2 top-[20rem] flex w-[39.4rem] -translate-x-1/2 flex-col items-center rounded-[2.4rem] bg-white px-[5.6rem] py-[4.8rem] shadow-dark-sh">
        {user.photo ? (
          <img
            src={user.photo}
            alt="image"
            className="h-[10.4rem] w-[10.4rem] rounded-[10.4rem] border-[4px] border-solid border-[#633cff] object-cover"
          />
        ) : (
          <div className="h-[10.4rem] w-[10.4rem] rounded-[10.4rem] border-[4px] border-solid border-[#633cff] bg-[#eee]"></div>
        )}
        <div className="space-y-[0.8rem] pb-[5.6rem] pt-[2.4rem] text-center">
          <h1 className="text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
            {user.firstName} {user.lastName}
          </h1>
          <h3 className="text-[1.6rem] leading-[2.4rem] text-[#737373]">
            {user.email}
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {links.map((link, index) => (
            <Link
              to={link.link}
              target="_blank"
              className={`flex w-[23.7rem] items-center gap-[0.8rem] rounded-[0.8rem] px-[1.6rem] py-[1.3rem] ${getBgColor(
                link.name,
              )}`}
              key={index}
            >
              {getCorrespondingLogo(link.name, "2rem")}
              <h3 className="text-[1.6rem] leading-[2.4rem]">{link.name}</h3>
              <MdOutlineArrowRightAlt size={"2rem"} className="ml-auto" />
            </Link>
          ))}
        </div>
      </div>

      {isCopied && (
        <div className="absolute bottom-[3rem] left-1/2 flex max-w-[39.7rem] -translate-x-1/2 items-center gap-[0.8rem] rounded-[1.2rem] bg-[#333] px-[2.4rem] py-[1.6rem]">
          <HiOutlineLink size={"2rem"} color={"#737373"} />
          <p className="text-[1.6rem] font-semibold leading-[2.4rem] text-[#fafafa]">
            The link has been copied to your clipboard!
          </p>
        </div>
      )}
    </section>
  );
}

export default PreviewPage;
