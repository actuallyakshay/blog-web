import { ICreatePostDto } from "@/types";
import { getToken } from "@/utils";
import { API_BASE_URL } from "@/utils/constants";
import axios from "axios";

export type Method = "GET" | "POST" | "PUT" | "DELETE";

const useAPI = () => {
  const token = getToken();

  const fetchData = async (input: {
    method?: Method;
    ep: string;
    body?: any;
    idToken?: string;
    excludeToken?: boolean;
  }) => {
    const { method, ep, body, idToken, excludeToken } = input;
    try {
      const config = {
        method: method ?? "GET",
        url: `${API_BASE_URL}/api/${ep}`,
        headers: {
          "Content-Type": "application/json",
          ...(!excludeToken && { Authorization: `Bearer ${idToken ?? token}` }),
        },
        data: body ?? {},
      };

      const res = await axios(config);

      return res.data;
    } catch (err) {}
  };

  const getUser = async () => {
    return fetchData({ ep: "users/me", method: "GET" });
  };

  const getPosts = async () => {
    return fetchData({ ep: "posts", method: "GET", excludeToken: true });
  };

  const getMyPosts = async () => {
    return fetchData({ ep: "posts/me", method: "GET" });
  };

  const createPost = async (input: ICreatePostDto) => {
    return fetchData({
      ep: "posts/create",
      method: "POST",
      body: input,
    });
  };

  const getPostById = async (id: string) => {
    return fetchData({ ep: `posts/${id}`, method: "GET" });
  };

  const login = async (input: { idToken: string }) => {
    return fetchData({
      ep: "auth/login",
      method: "POST",
      idToken: input.idToken,
    });
  };

  const deletePost = async (id: string) => {
    return fetchData({ ep: `posts/${id}`, method: "DELETE" });
  };

  return {
    getUser,
    getPosts,
    login,
    getMyPosts,
    createPost,
    deletePost,
    getPostById,
  };
};

export default useAPI;
