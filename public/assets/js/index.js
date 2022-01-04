// target UI elements
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
// in private navbar
const logoutBtn = $("#logout-btn");

const handleLogin = async () => {};

const handleSignup = async () => {
    // get post body from form fields
    const 
    // make post request to /auth/signup
};

const handleLogout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    //   send to homepage
    window.location.replace("/");
  }
};

// EVENT LISTENERS
