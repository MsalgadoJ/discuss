import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
import ClientAnimation from "@/components/common/client-animation";
import { db } from "@/db";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  const slugInfo = await db.topic.findFirst({
    where: { slug },
  });

  return (
    <div className="flex flex-col-reverse justify-end gap-4 p-4 sm:max-w-[600px] mx-auto">
      <div className="col-span-3 text-stone-200">
        <ClientAnimation>
          <h1 className="text-2xl font-bold">{slug}</h1>
          <p className="mb-4 ">{slugInfo?.description ?? ""}</p>
          <PostList
            placeholderNoPost="Go ahead and write the first post 😃"
            fetchData={() => fetchPostsByTopicSlug(slug)}
          />
        </ClientAnimation>
      </div>

      <div className="self-end">
        <ClientAnimation>
          <PostCreateForm slug={slug} />
        </ClientAnimation>
      </div>
    </div>
  );
}
