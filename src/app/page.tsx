import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";

export default function Home() {
  return (
    <div className="container mx-auto w-5/6 pt-4 flex flex-col-reverse gap-4 text-white">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
