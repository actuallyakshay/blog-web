import useAPI from "@/hooks/usApi";
import { deleteToken, getToken, setToken } from "@/utils";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const { login, getUser } = useAPI();
  const router = useRouter();

  useEffect(() => {
    try {
      const token = getToken();
      if (!token) throw new Error("Invalid token");

      const _verifyToken = async () => {
        const resp = await getUser();
        if (resp) {
          router.push("/dashboard");
        }
        if (!resp) throw new Error("Invalid token");
      };
      _verifyToken();
    } catch (error) {
      deleteToken();
      router.push("/login");
      return;
    }
  }, []);

  const handleLoginSuccess = async (data: any) => {
    const res = await login({ idToken: data.credential });
    if (res) {
      setToken(res.token);
      toast.success("Login successful");
      router.push("/dashboard");
    }
  };

  const handleLoginError = () => {};
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Login</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          theme="filled_blue"
        />
      </div>
    </>
  );
};

export default Login;
