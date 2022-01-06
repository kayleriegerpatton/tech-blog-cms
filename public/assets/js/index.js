// target UI elements
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");
const newBlogForm = $("#new-blog-form");
const deleteBlogBtn = $("[name=delete-blog-btn]");
const readBlogBtn = $("[name=read-btn");
const editBlogBtn = $("[name=edit-blog-btn");

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

const saveNewBlog = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const title = $("#new-blog-title").val();
  const content = $("#new-blog-content").val();

  // ERROR MESSAGE FOR EMPTY FIELDS

  // make POST request to /api/blogs
  const response = await fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  const data = await response.json();

  // if success response, direct to dashboard page
  if (data.success) {
    window.location.replace("/dashboard");
  }
};

const deleteBlog = async (event) => {
  const id = event.currentTarget.id;

  const response = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    // send to dashboard
    window.location.replace("/dashboard");
  }
};

const viewSingleBlog = (event) => {
  event.preventDefault();

  // get blog id from btn
  const id = event.currentTarget.id;

  // redirect to single blog page
  window.location.replace(`/blogs/${id}`);
};

const handleEditBlogBtn = (event) => {
  event.preventDefault();

  // get blog id from btn
  const id = event.currentTarget.id;

  // redirect to edit blog page
  window.location.replace(`/edit-blog/${id}`);
};

// EVENT LISTENERS
signupForm.on("submit", handleSignup);
loginForm.on("submit", handleLogin);
logoutBtn.on("click", handleLogout);
newBlogForm.on("submit", saveNewBlog);
deleteBlogBtn.on("click", deleteBlog);
readBlogBtn.on("click", viewSingleBlog);
editBlogBtn.on("click", handleEditBlogBtn);
