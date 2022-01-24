// AUTH interactions
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");

// BLOG interactions
const readBlogBtn = $("[name=read-btn");

// COMMENT interactions
const addCommentBtn = $("#add-comment-btn");

const handleLogin = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const email = $("#email").val();
  const password = $("#password").val();

  // make POST request to /auth/login
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  console.log(data);

  // direct to dashboard
  if (data.success) {
    window.location.replace("/dashboard");
  }
};

const handleSignup = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // ERROR MESSAGE FOR EMPTY FIELDS

  // confirm passwords match
  if (password !== confirmPassword) {
    //  DISPLAY ERROR MESSAGE
    // console.log("passwords don't match");
  }

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

const createComment = (event) => {
  event.preventDefault();

  // get blog id from button
  const blogId = event.currentTarget.id;
  console.log(blogId);

  // get comment value
  const comment = addCommentBtn.val();
  console.log(comment);

  // *ERROR MESSAGE FOR EMPTY FIELDS

  // make POST request to /api/comments/
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      blog_id: blogId,
      user_id: req.session.user.id,
    }),
  });

  const data = await response.json();

  // if success response, reload page with new comment
  if (data.success) {
    window.location.replace(`/blogs/${blogId}`);
  }
};

// EVENT LISTENERS
signupForm.on("submit", handleSignup);
loginForm.on("submit", handleLogin);
logoutBtn.on("click", handleLogout);

readBlogBtn.on("click", viewSingleBlog);
addCommentBtn.on("submit", createComment);
