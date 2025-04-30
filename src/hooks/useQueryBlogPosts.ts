import { useQuery } from "@tanstack/react-query";
import { getBlogsPosts } from "../api/api";

export default function useQueryBlogPosts() {
  const {
    data: blogPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getBlogPosts"],

    queryFn: getBlogsPosts,
  });



  return {
    blogPosts , isLoading , error
  }
}
