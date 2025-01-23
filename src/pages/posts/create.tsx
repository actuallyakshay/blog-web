import CreatePost from "@/components/CreatePost";
import withAuth from "@/utils/withAuth";

const Index = () => {
  return <CreatePost />;
};

export default withAuth(Index);
