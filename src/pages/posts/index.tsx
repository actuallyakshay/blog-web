import Posts from "@/components/Posts";
import useAPI from "@/hooks/usApi";
import { IPost } from "@/types";
import { useEffect, useState } from "react";

const Index = () => {
  const { getPosts } = useAPI();
  const [posts, setPosts] = useState<IPost[]>([]);

  const _getPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    _getPosts();
  }, []);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default Index;
