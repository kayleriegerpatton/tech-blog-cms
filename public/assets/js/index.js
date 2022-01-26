// AUTH interactions
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const noUserModal = $("#no-user-modal");
const logoutBtn = $("#logout-btn");

const renderErrorMessages = (errors) => {
  const fields = ["email", "password", "username", "confirmPassword"];

  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const getLoginErrors = ({ email, password }) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Invalid email.";
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
      password
    )
  ) {
    errors.password = "Invalid password.";
  }

  return errors;
};

const handleLogin = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const email = $("#email").val();
  const password = $("#password").val();

  // display empty field errors
  const errors = getLoginErrors({
    email,
    password,
  });
  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    // make POST request to /auth/login
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.error === "User does not exist.") {
      noUserModal.modal("show");
      console.log("bad user modal hit");
    }

    // direct to dashboard
    if (data.success) {
      window.location.replace("/dashboard");
    }
  }
};

const getSignupErrors = ({ email, username, password, confirmPassword }) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Invalid email.";
  }

  if (!username || !/^[A-Za-z0-9]{8,30}$/.test(username)) {
    errors.username = "Invalid username.";
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
      password
    )
  ) {
    errors.password = "Invalid password.";
  }

  if (!confirmPassword || password !== confirmPassword) {
    errors.confirmPassword = "Password error.";
  }

  return errors;
};

const handleSignup = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // display empty field errors
  const errors = getSignupErrors({
    email,
    username,
    password,
    confirmPassword,
  });

  renderErrorMessages(errors);

  // make post request to /auth/signup
  const response = await fetch("/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

  const data = await response.json();

  //   if success response, direct to login page
  if (data.success) {
    window.location.replace("/login");
  }
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
signupForm.on("submit", handleSignup);
loginForm.on("submit", handleLogin);
logoutBtn.on("click", handleLogout);
