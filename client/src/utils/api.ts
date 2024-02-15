const BASE_URL = "http://127.0.0.1:5000/devlinks-api/v1/users";
// const BASE_URL =
//   "https://toyan-link-sharing-app-api.vercel.app/devlinks-api/v1/users";

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
    console.log(response);
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function verifyEmail(token: string) {
  try {
    const response = await fetch(`${BASE_URL}/verify-email?token=${token}`);

    console.log(response);
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    console.log(data);
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

    console.log(response);
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error(data.message);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
