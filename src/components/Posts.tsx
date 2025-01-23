import { IPost } from "@/types";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  posts: IPost[];
  handleDelete?: (id: string) => void;
}

const Posts: React.FC<IProps> = ({ posts, handleDelete }: IProps) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <Navbar />
        <div>
          {handleDelete && (
            <Link href="/posts/create">
              <div className="w-[90%] m-auto flex justify-end gap-10 mt-10">
                <button className=" bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  Create Post
                </button>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] m-auto mt-10">
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
