import { IPost } from "@/types";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  post: IPost;
  handleDelete?: (id: string) => void;
}

const PostCard: React.FC<IProps> = ({ post, handleDelete }: IProps) => {
  const router = useRouter();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
      <p>
        <span className="text-gray-500">Posted on: </span>
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p>
        created by: <span className="text-blue-500">{post.user.name}</span>
      </p>

      {handleDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(post.id);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default PostCard;
