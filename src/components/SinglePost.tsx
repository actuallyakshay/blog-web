import Navbar from "@/components/Navbar";
import useAPI from "@/hooks/usApi";
import { IPost } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const SinglePost = () => {
  const { getPostById } = useAPI();
  const router = useRouter();
  const [post, setPost] = useState<IPost>();
  const postId = router.query.id;

  const _getPostById = async () => {
    const posts = await getPostById(router.query.id as string);
    setPost(posts);
  };

  useEffect(() => {
    if (!postId) return;
    _getPostById();
  }, [postId]);

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
          <button
            onClick={goBack}
            className="mb-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post?.title}
          </h1>

          <div className="text-gray-700 leading-relaxed">{post?.content}</div>

          <div className="text-sm text-gray-500 mb-6">
            <p>By {post?.user?.name}</p>
            <p>{new Date(post?.createdAt ?? "").toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
