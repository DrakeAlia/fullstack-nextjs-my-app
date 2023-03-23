// We need to be able to make API request to API routes that will allow a user to sign in and register.

// fetcher is a function that will make a request to the API route and return the data.
export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    // We need to stringify the body if it exists.
    // This is because the body is an object and we need to send it as a string.
    // (body &&) turns into true, then what's left is this object
    ...(body && { body: JSON.stringify(body) }),
    // We need to pass the cookie to the API route so that we can authenticate the user.
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // If the response is not ok, we need to throw an error.
  if (!res.ok) {
    // handle your errors
    throw new Error("API error");
  }

  // If the response is ok, we need to return the data.
  if (json) {
    const data = await res.json();
    return data.data;
  }
};

// register and signin are functions that will make a request to the API route and return the data.
export const register = (user) => {
  return fetcher({ url: "/api/register", method: "post", body: user });
};

export const signin = (user) => {
  return fetcher({ url: "/api/signin", method: "post", body: user });
};

// createNewProject function will post a new project to the API route and return the data.
export const createNewProject = (name) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
