import React, { Component } from "react";
import { Bounce, toast } from "react-toastify";
import PostForm from "../PostForm/PostForm";
import PostTable from "../PostTable/PostTable";

const createPostSuccess = () => {
  toast.success("Added Post Successfully!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

const updatedPost = () => {
  toast.success("Updated Post Successfully!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

const deletedPost = () => {
  toast.error("Deleted! Post", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

class PostManagementDashboard extends Component {
  state = {
    posts: [],
    post: {
      title: "",
      body: "",
    },
    isEditMode: false,
    editPostId: null,
    loading: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => console.log(err));
  }

  handleSubmit = () => {
    const { title, body } = this.state.post;

    if (!title.trim() || !body.trim()) {
      alert("Please enter both title and body!");
      return;
    }

    if (this.state.isEditMode) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  createPost = () => {
    this.setState({ loading: true }); 

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(this.state.post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: [data, ...this.state.posts],
          post: { title: "", body: "" },
          loading: false,
        });
        createPostSuccess();
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  updatePost = () => {
    this.setState({ loading: true });

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.state.editPostId}`,
      {
        method: "PUT",
        body: JSON.stringify(this.state.post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = this.state.posts.map((post) =>
          post.id === this.state.editPostId ? data : post
        );
        this.setState({
          posts: updatedPosts,
          post: { title: "", body: "" },
          isEditMode: false,
          editPostId: null,
          loading: false,
        });
        updatedPost();
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedPosts = this.state.posts.filter((post) => post.id !== id);
        this.setState({ posts: updatedPosts });
        deletedPost();
      })
      .catch((err) => console.log(err));
  };

  editPost = (post) => {
    this.setState({
      post: { title: post.title, body: post.body },
      isEditMode: true,
      editPostId: post.id,
    });
  };

  handleChange = (event) => {
    this.setState({
      post: { ...this.state.post, [event.target.name]: event.target.value },
    });
  };

  render() {
    return (
      <div className="w-full">
        <h1 className="bg-clip-text text-transparent text-center my-10 bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black">
          CRUD OPERATIONS
        </h1>
        <PostForm
          post={this.state.post}
          isEditMode={this.state.isEditMode}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          loading={this.state.loading}
        />
        <PostTable
          posts={this.state.posts}
          editPost={this.editPost}
          deletePost={this.deletePost}
        />
      </div>
    );
  }
}

export default PostManagementDashboard;
