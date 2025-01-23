import useAPI from "@/hooks/usApi";
import { IUser } from "@/types";
import { deleteToken } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { getUser } = useAPI();

  const router = useRouter();
  const [user, setUser] = useState<IUser>();

  const _getUser = async () => {
    const user = await getUser();
    setUser(user);
  };

  useEffect(() => {
    _getUser();
  }, []);

  const handleAuth = () => {
    if (user) {
      deleteToken();
      toast.success("Logout successful");
      router.push("/login");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex flex-row font-bold text-[24px] gap-5 sm:gap-10  justify-between pl-4 sm:pl-10 underline">
        {user && <Link href="/dashboard">Dashboard</Link>}

        <Link href="/posts">Posts</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleAuth}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
