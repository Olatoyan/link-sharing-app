// const BASE_URL = "http://127.0.0.1:5000/devlinks-api/v1/users";
const BASE_URL = "https://toyan-devlinks-api.vercel.app/devlinks-api/v1/users";

import Cookies from "js-cookie";

export async function signUp({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    });
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function verifyEmail(token: string) {
  try {
    const response = await fetch(`${BASE_URL}/verify-email?token=${token}`);

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    Cookies.set("jwt", data.token);
    Cookies.set("userId", data.data.user._id);
    Cookies.set("userMail", data.data.user.email);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUsersLink() {
  const token = Cookies.get("jwt");
  try {
    const response = await fetch(`${BASE_URL}/links`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
}

export async function createUserLink({
  name,
  link,
  user,
}: {
  name: string;
  link: string;
  user: string;
}) {
  const token = Cookies.get("jwt");
  try {
    const response = await fetch(`${BASE_URL}/links`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        link,
        user,
      }),
    });

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUserProfile({
  firstName,
  lastName,
  photo,
}: {
  firstName: string;
  lastName: string;
  photo: string;
}) {
  const token = Cookies.get("jwt");
  const email = Cookies.get("userMail");
  try {
    const response = await fetch(`${BASE_URL}/profile-update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        photo,
      }),
    });

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserProfile() {
  const token = Cookies.get("jwt");
  try {
    const response = await fetch(`${BASE_URL}/profile-update`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getOfflineUserProfile(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/offline-profile?id=${id}`);
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getOfflineUserLinks(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/offline-links?id=${id}`);
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
