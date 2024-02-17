import { ReactNode, createContext, useContext, useState } from "react";

export type UserProps = {
  firstName: string;
  lastName: string;
};

type UserState = {
  firstName: string;
  lastName: string;
  updateFirstName: (newFirstName: string) => void;
  updateLastName: (newLastName: string) => void;
  // addLink: (name: string, link: string) => void;
  // deleteLink: (index: number) => void;
};

const UsersContext = createContext<UserState | null>(null);

function UsersProvider({ children }: { children: ReactNode }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function updateFirstName(newFirstName: string) {
    setFirstName(newFirstName);
  }

  function updateLastName(newLastName: string) {
    setLastName(newLastName);
  }

  return (
    <UsersContext.Provider
      value={{ firstName, lastName, updateFirstName, updateLastName }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UsersProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { UsersProvider, useUserContext };
