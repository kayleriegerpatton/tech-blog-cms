const newBlogForm = $("#new-blog-form");
const deleteBlogBtn = $("[name=delete-blog-btn]");
const readBlogBtn = $("[name=read-btn");
const editBlogBtn = $("[name=edit-blog-btn");
const saveBlogChangesBtn = $("[name=save-blog-changes-btn]");

const renderBlogErrorMessages = (errors) => {
  const fields = ["title", "content"];

  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const getBlogErrors = ({ title, content }) => {
  const errors = {};

  if (!title) {
    errors.title = "Give your blog a title.";
  }

  if (!content) {
    errors.content = "Your blog can't be empty!";
  }

  return errors;
};

const saveNewBlog = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const title = $("#new-blog-title").val();
  const content = $("#new-blog-content").val();

  // Display error messages
  const errors = getBlogErrors({ title, content });
  renderBlogErrorMessages(errors);

  // if no errors, run request
  if (!Object.keys(errors).length) {
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

const saveBlogChanges = async (event) => {
  event.preventDefault();

  // get blog id from button
  const id = event.currentTarget.id;

  // get post body from form fields
  const title = $("#edit-blog-title").val();
  const content = $("#edit-blog-content").val();

  // display empty form errors
  const errors = getBlogErrors({ title, content });

  renderBlogErrorMessages(errors);

  // if no errors, run request
  if (!Object.keys(errors).length) {
    // make PUT request to /api/blogs
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
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
  }
};

// EVENT LISTENERS
newBlogForm.on("submit", saveNewBlog);
deleteBlogBtn.on("click", deleteBlog);
readBlogBtn.on("click", viewSingleBlog);
editBlogBtn.on("click", handleEditBlogBtn);
saveBlogChangesBtn.on("click", saveBlogChanges);
