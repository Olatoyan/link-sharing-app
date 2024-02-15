import { createContext, useContext, useState } from "react";

export type LinkProps = {
  name: string;
  link: string;
};

type LinksState = {
  links: LinkProps[];
  addLink: (name: string, link: string) => void;
};

const LinksContext = createContext<LinksState | null>(null);

function LinksProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<LinkProps[]>([]);

  function addLink(name: string, link: string) {
    setLinks((prevLinks) => [...prevLinks, { name, link }]);
  }

  return (
    <LinksContext.Provider value={{ links, addLink }}>
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

export { LinksProvider, useLinks };
