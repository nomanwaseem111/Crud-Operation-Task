import React, { Component } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

class PostTable extends Component {
  render() {
    const { posts, editPost, deletePost } = this.props;

    return (
      <table className="mx-auto w-[90%] text-center mt-5 border-[#999] border divide-y divide-gray-200">
        <thead className="bg-blue-600">
          <tr>
            <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="px-6 py-4 !w-[500px]">{post.title}</td>
              <td className="px-6 py-4 !w-[500px]">{post.body}</td>
              <td className="px-6 py-12 cursor-pointer flex gap-x-5 justify-center items-center !w-full">
                <FaRegEdit
                  className="w-8 h-8 text-green-500"
                  onClick={() => editPost(post)}
                />
                <MdDelete
                  className="w-8 h-8 text-red-500"
                  onClick={() => deletePost(post.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PostTable;
