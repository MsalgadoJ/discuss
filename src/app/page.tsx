import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import ClientAnimation from "@/components/common/client-animation";

export default function Home() {
  return (
    <div className="container mx-auto w-5/6 pt-4 flex flex-col-reverse sm:flex-row max-w-[1024px] justify-between gap-4 text-white">
      <div className="col-span-3">
        <ClientAnimation>
          <h1 className="text-xl m-2">Top Posts</h1>
          <PostList fetchData={fetchTopPosts} placeholderNoPost="" />
        </ClientAnimation>
      </div>
      <ClientAnimation>
        <div className="bg-stone-200 border-1 border-[#F31260] shadow py-5 px-2 rounded">
          <TopicCreateForm />
          <Divider className="my-2" />
          <h3 className="text-xl text-purple font-extrabold my-2">Topics</h3>
          <TopicList />
        </div>
      </ClientAnimation>
    </div>
  );
}
