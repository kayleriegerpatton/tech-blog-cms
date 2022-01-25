const addCommentBtn = $("[name=add-comment-btn]");
const deleteCommentBtn = $("[name=delete-comment-btn]");
const saveCommentChangesBtn = $("[name=edit-comment-btn]");

const createComment = async (event) => {
  event.preventDefault();
  console.log("CreateComment fn");

  // get blog id from button
  const blogId = event.currentTarget.id;
  console.log(blogId);

  // get comment value
  const comment = $("#new-comment-field").val();
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
    }),
  });

  const data = await response.json();

  // if success response, reload page with new comment
  if (data.success) {
    window.location.replace(`/blogs/${blogId}`);
  }
};

const editComment = async (event) => {
  event.preventDefault();

  // get comment id from btn
  const commentId = event.currentTarget.id;

  // get blogId from btn
  const blogId = saveCommentChangesBtn.attr("data-blog");

  // get post body from field
  const comment = $("#new-comment-field").val();

  // *ERROR MESSAGE FOR EMPTY FIELDS ETC

  // make put request to /api/comments
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
    }),
  });

  const data = await response.json();
  console.log("comment data:", data);

  // if success, redirect to blog page
  if (data.success) {
    window.location.replace(`/blogs/${blogId}`);
  }
};

const deleteComment = async (event) => {
  const commentId = event.currentTarget.id;
  const blogId = $("[name=delete-comment-btn]").attr("data-blog");

  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    // reload blog page
    window.location.replace(`/blogs/${blogId}`);
  }
};

// EVENT LISTENERS
addCommentBtn.on("click", createComment);
deleteCommentBtn.on("click", deleteComment);
saveCommentChangesBtn.on("click", editComment);
