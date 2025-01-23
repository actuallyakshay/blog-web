import Navbar from "@/components/Navbar";
import useAPI from "@/hooks/usApi";
import { ICreatePostDto } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [input, setInput] = useState<ICreatePostDto>({
    title: "",
    content: "",
  });
  const { createPost } = useAPI();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.title || !input.content) return;
    try {
      const resp = await createPost(input);
      if (resp) {
        toast.success("Post created successfully");
        router.push("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Post
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                onChange={(e) => setInput({ ...input, title: e.target.value })}
                type="text"
                id="title"
                placeholder="Enter the post title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <textarea
                onChange={(e) =>
                  setInput({ ...input, content: e.target.value })
                }
                id="content"
                placeholder="Write your content here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                disabled={!input.title || !input.content}
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
