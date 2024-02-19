import { createContext, useContext, useEffect, useState } from "react";
import { useUserLink } from "../features/links/useUserLink";

export type LinkProps = {
  name: string;
  link: string;
};

type LinksState = {
  links: LinkProps[];
  addLink: (name: string, link: string) => void;
  updateLink: (index: number, updatedFields: Partial<LinkProps>) => void;
  deleteLink: (index: number) => void;
};

const LinksContext = createContext<LinksState | null>(null);

function LinksProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const { user } = useUserLink();

  function addLink(name: string, link: string) {
    setLinks((prevLinks) => [...prevLinks, { name, link }]);
  }

  function updateLink(index: number, updatedFields: Partial<LinkProps>) {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, ...updatedFields } : link,
      ),
    );
  }

  function deleteLink(index: number) {
    setLinks(links.filter((_, i) => i !== index));
  }

  useEffect(() => {
    const userLinks: LinkProps[] = user?.data?.links;

    userLinks?.forEach((user) => {
      addLink(user.name, user.link);
    });
  }, [user]);

  return (
    <LinksContext.Provider value={{ links, addLink, updateLink, deleteLink }}>
      {children}
    </LinksContext.Provider>
  );
}

function useLinks() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useLinks must be used within a LinksProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LinksProvider, useLinks };
