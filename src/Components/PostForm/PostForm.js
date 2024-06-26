import React, { Component } from "react";

class PostForm extends Component {
  render() {
    const { post, isEditMode, handleChange, handleSubmit, loading } =
      this.props;

    return (
      <div className="w-full flex justify-center gap-x-5 items-center">
        <div className="bg-white p-4 rounded-lg">
          <div className="relative bg-inherit">
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={handleChange}
              name="title"
              className="peer bg-transparent h-10 w-72 !text-black rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
              placeholder="Title"
            />
            <label
              htmlFor="title"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
            >
              Title
            </label>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="relative bg-inherit">
            <input
              type="text"
              id="body"
              value={post.body}
              onChange={handleChange}
              name="body"
              className="peer bg-transparent h-10 w-72 !text-black rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
              placeholder="Description"
            />
            <label
              htmlFor="body"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
            >
              Description
            </label>
          </div>
        </div>
        <button
          className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
          onClick={handleSubmit}
        >
          {loading ? (
            <div class="w-6 h-6 mx-auto rounded-full animate-spin border border-solid border-sky-500 border-t-transparent"></div>
          ) : (
            <span>{isEditMode ? "Update Post" : "Create Post"}</span>
          )}
        </button>
      </div>
    );
  }
}

export default PostForm;
