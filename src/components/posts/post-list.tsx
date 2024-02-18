import type { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
  placeholderNoPost: string;
}

export default async function PostList({
  fetchData,
  placeholderNoPost,
}: PostListProps) {
  const posts = await fetchData();

  if (!posts.length) {
    return <p className="text-stone-200">{placeholderNoPost}</p>;
  }

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div
        key={post.id}
        className="bg-stone-200 border-1 min-w-[300px] border-[#F31260] rounded p-2 transition-transform hover:scale-105"
      >
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold text-purple">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-purple">By {post.user.name}</p>
            <p className="text-xs text-purple">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
