import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { API_BASE_URL } from "./constants";
import { deleteToken, getToken } from "./token";

export default function withAuth<P>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();

    const verifyToken = async (token: any) => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/users/me`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        return await res.json();
      } catch (error) {
        return router.push("/login");
      }
    };

    useEffect(() => {
      try {
        const token = getToken();
        if (!token) throw new Error("Invalid token");
        const _verifyToken = async () => {
          const resp = await verifyToken(token);
          if (!resp) throw new Error("Invalid token");
        };
        _verifyToken();
      } catch (error) {
        deleteToken();
        router.push("/login");
        return;
      }
    }, []);

    return <Component {...props} />;
  };
}
