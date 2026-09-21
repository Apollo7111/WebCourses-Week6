const apiUrl = "http://localhost:4000/api/user/login";

// Example user data
const user = {
  email: "matti@example.com",
  password: "R3g5T7#gh",
};

const login = async () => {
  try {

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to add a new user");
    }

    const json = await response.json();
    console.log("Login succesful:", json);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

login();


// What is the only difference between demo2.js and demo3.js? (the end point)
// Both endpoints return a token. What should the client do with that token after receiving it? (Hint: think about the next page load.) (makes another request using the token, and the server verifies that the token is valid and allows to access protected routes, the jwt token contains _id, iat(creation date) exp(expiration date))