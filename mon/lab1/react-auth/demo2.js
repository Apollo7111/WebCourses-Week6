const apiUrl = "http://localhost:4000/api/user/signup";

// Example user data
const user = {
  email: "matti@example.com",
  password: "R3g5T7#gh",
};

const register = async () => {
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
    console.log("New user added:", json);
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

register();

// Identify the three things that make the request a valid JSON API call (method, body, Content-Type header). (The server expecting body content(post), the actual content in the headers, the requests sets content type to application/json)
// What does response.ok check? What HTTP status codes does it cover? (Checks if the response is successful, checks codes between 200 and 299)
// Why do we need two await expressions — one for fetch(...) and one for .json()? (The first one sends the content to the server and makes sure it recieves them, the second await waits for the response to be ready so it can be recieved)
// What does the returned token (JWT) look like? Open the browser console or use a tool like Postman to see it. (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWIwZGQyZjIxZDc2YTQ1YjAyYWUxNjAiLCJpYXQiOjE3ODk5NzU4NTUsImV4cCI6MTc5MDIzNTA1NX0.QjP3NJbC4_74BS6gkUAt0vwonfC0UDra2StYryPf7Dc)