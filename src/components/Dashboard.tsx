import useAPI from "@/hooks/usApi";
import { IPost } from "@/types";
import withAuth from "@/utils/withAuth";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Posts from "./Posts";

const Dashboard = () => {
  const { getMyPosts, deletePost } = useAPI();
  const [posts, setPosts] = React.useState<IPost[]>([]);

  const _getMyPosts = async () => {
    const posts = await getMyPosts();
    setPosts(posts);
  };

  useEffect(() => {
    _getMyPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const resp = await deletePost(id);
      if (resp) {
        toast.success("Post deleted successfully");
        await _getMyPosts();
      }
    } catch (error) {}
  };

  return <Posts posts={posts} handleDelete={handleDelete} />;
};

export default withAuth(Dashboard);
