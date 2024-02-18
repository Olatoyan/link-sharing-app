import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetUserProfile } from "../features/profile/useGetUserProfile";

export type UserProps = {
  firstName: string;
  lastName: string;
  photo: string;
};

type UserState = {
  firstName: string;
  lastName: string;
  photo: string;
  updateFirstName: (newFirstName: string) => void;
  updateLastName: (newLastName: string) => void;
  updatePhoto: (newPhoto: string) => void;
};

const UsersContext = createContext<UserState | null>(null);

function UsersProvider({ children }: { children: ReactNode }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");

  const { userProfile } = useGetUserProfile();

  function updateFirstName(newFirstName: string) {
    setFirstName(newFirstName);
  }

  function updateLastName(newLastName: string) {
    setLastName(newLastName);
  }

  function updatePhoto(newPhoto: string) {
    setPhoto(newPhoto);
  }
  const dataDb = userProfile?.data?.user;

  useEffect(() => {
    const firstNameDb = dataDb?.[0].firstName;
    const lastNameDb = dataDb?.[0].lastName;
    const photoDb = dataDb?.[0].photo;

    setFirstName(firstNameDb || "");
    setLastName(lastNameDb || "");
    setPhoto(photoDb || "");
  }, [dataDb]);

  return (
    <UsersContext.Provider
      value={{
        firstName,
        lastName,
        photo,
        updateFirstName,
        updateLastName,
        updatePhoto,
      }}
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
