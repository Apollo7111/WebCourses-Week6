// use case 1
localStorage.setItem("username", "Rami");
localStorage.getItem("username");
localStorage.removeItem("username");

// use case 2
const userArray = ["Rami", 25];
localStorage.setItem("user", JSON.stringify(userArray));

const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);

localStorage.removeItem("user");
localStorage.clear();

// use case 3
sessionStorage.setItem("username", "Rami");
sessionStorage.getItem("username");
sessionStorage.removeItem("username");


// Open demo1.js and run it in the browser console (or in a JS scratch file). Open the Application → Local Storage tab in Chrome DevTools and watch the values appear and disappear.
// What happens if you call JSON.parse(null)? Try it in the console. This is what you get if localStorage.getItem("user") returns null (key doesn't exist).
// What is the difference between localStorage.removeItem("user") and localStorage.clear()? When would you use each? (removes a specific item vs removing everything)